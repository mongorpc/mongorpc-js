/**
 * MongoRPC Admin SDK
 * Provides elevated access to MongoRPC with rule bypass.
 */

import { createPromiseClient, PromiseClient, Transport } from '@connectrpc/connect';
import { createGrpcTransport } from '@connectrpc/connect-node';
import { MongoRPC } from './gen/mongorpc/v1/mongorpc_connect.js';

export interface AdminClientConfig {
    /** Server address (e.g., 'localhost:50051') */
    address: string;
    /** Admin API key */
    adminKey: string;
    /** Admin API secret */
    adminSecret: string;
    /** Use HTTPS */
    secure?: boolean;
}

export interface IndexInfo {
    name: string;
    keys: Array<{ field: string; direction?: number; type?: string }>;
    unique: boolean;
    sparse: boolean;
    expireAfterSeconds?: number;
}

export interface IndexOptions {
    name?: string;
    unique?: boolean;
    sparse?: boolean;
    expireAfterSeconds?: number;
    hidden?: boolean;
}

export interface CollectionInfo {
    name: string;
    type: string;
}

export interface CollectionOptions {
    capped?: boolean;
    size?: number;
    max?: number;
    validationLevel?: string;
    validationAction?: string;
}

/**
 * Admin client for MongoRPC with elevated privileges.
 * All operations bypass security rules.
 */
export class MongoRPCAdminClient {
    private readonly client: PromiseClient<typeof MongoRPC>;
    private readonly adminKey: string;
    private readonly adminSecret: string;

    constructor(config: AdminClientConfig) {
        // Create gRPC transport
        const transport = createGrpcTransport({
            baseUrl: config.secure
                ? `https://${config.address}`
                : `http://${config.address}`,
            httpVersion: '2',
        });

        this.client = createPromiseClient(MongoRPC, transport);
        this.adminKey = config.adminKey;
        this.adminSecret = config.adminSecret;
    }

    /**
     * Get admin headers for requests.
     */
    getHeaders(): Record<string, string> {
        return {
            'x-admin-key': this.adminKey,
            'x-admin-secret': this.adminSecret,
        };
    }

    /**
     * Get an admin database handle.
     */
    db(name: string): AdminDatabase {
        return new AdminDatabase(this, name);
    }

    /** @internal */
    get grpcClient(): PromiseClient<typeof MongoRPC> {
        return this.client;
    }
}

/**
 * Admin database handle.
 */
export class AdminDatabase {
    constructor(
        private readonly admin: MongoRPCAdminClient,
        public readonly name: string
    ) { }

    /**
     * Get an admin collection handle.
     */
    collection<T = Record<string, unknown>>(name: string): AdminCollection<T> {
        return new AdminCollection<T>(this, name);
    }

    /**
     * List all collections in this database.
     */
    async listCollections(): Promise<CollectionInfo[]> {
        const response = await this.admin.grpcClient.listCollections(
            { database: this.name, includeSystem: false },
            { headers: this.admin.getHeaders() }
        );
        return response.collections.map(c => ({
            name: c.name,
            type: c.type,
        }));
    }

    /**
     * Create a new collection.
     */
    async createCollection(name: string, options?: CollectionOptions): Promise<void> {
        await this.admin.grpcClient.createCollection(
            {
                database: this.name,
                collection: name,
                options: options ? {
                    capped: options.capped ?? false,
                    size: BigInt(options.size ?? 0),
                    max: BigInt(options.max ?? 0),
                    validationLevel: options.validationLevel ?? '',
                    validationAction: options.validationAction ?? '',
                } : undefined,
            },
            { headers: this.admin.getHeaders() }
        );
    }

    /**
     * Drop a collection.
     */
    async dropCollection(name: string): Promise<void> {
        await this.admin.grpcClient.dropCollection(
            { database: this.name, collection: name },
            { headers: this.admin.getHeaders() }
        );
    }

    /**
     * Rename a collection.
     */
    async renameCollection(oldName: string, newName: string, dropTarget = false): Promise<void> {
        await this.admin.grpcClient.renameCollection(
            { database: this.name, collection: oldName, newName, dropTarget },
            { headers: this.admin.getHeaders() }
        );
    }
}

/**
 * Admin collection handle with elevated privileges.
 */
export class AdminCollection<T = Record<string, unknown>> {
    constructor(
        private readonly database: AdminDatabase,
        public readonly name: string
    ) { }

    private get admin(): MongoRPCAdminClient {
        return (this.database as any).admin;
    }

    /**
     * List all indexes on this collection.
     */
    async listIndexes(): Promise<IndexInfo[]> {
        const response = await this.admin.grpcClient.listIndexes(
            { database: this.database.name, collection: this.name },
            { headers: this.admin.getHeaders() }
        );
        return response.indexes.map(idx => ({
            name: idx.name,
            unique: idx.unique,
            sparse: idx.sparse,
            expireAfterSeconds: idx.expireAfterSeconds ? Number(idx.expireAfterSeconds) : undefined,
            keys: idx.keys.map(k => ({
                field: k.field,
                direction: k.keyType.case === 'direction' ? (k.keyType.value === 1 ? 1 : -1) : undefined,
                type: k.keyType.case === 'type' ? k.keyType.value : undefined,
            })),
        }));
    }

    /**
     * Create an index on this collection.
     */
    async createIndex(keys: Record<string, 1 | -1 | string>, options?: IndexOptions): Promise<string> {
        const keyList = Object.entries(keys).map(([field, direction]) => ({
            field,
            keyType: typeof direction === 'number'
                ? { case: 'direction' as const, value: direction === 1 ? 1 : 2 } // ASCENDING=1, DESCENDING=2
                : { case: 'type' as const, value: direction },
        }));

        const response = await this.admin.grpcClient.createIndex(
            {
                database: this.database.name,
                collection: this.name,
                keys: keyList,
                options: options ? {
                    name: options.name ?? '',
                    unique: options.unique ?? false,
                    sparse: options.sparse ?? false,
                    expireAfterSeconds: BigInt(options.expireAfterSeconds ?? 0),
                    hidden: options.hidden ?? false,
                } : undefined,
            },
            { headers: this.admin.getHeaders() }
        );
        return response.indexName;
    }

    /**
     * Drop an index from this collection.
     */
    async dropIndex(indexName: string): Promise<void> {
        await this.admin.grpcClient.dropIndex(
            { database: this.database.name, collection: this.name, indexName },
            { headers: this.admin.getHeaders() }
        );
    }

    /**
     * Count documents (bypasses rules).
     */
    async countDocuments(): Promise<number> {
        const response = await this.admin.grpcClient.countDocuments(
            { database: this.database.name, collection: this.name },
            { headers: this.admin.getHeaders() }
        );
        return Number(response.count);
    }
}
