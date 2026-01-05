/**
 * MongoRPC Client using generated Connect-ES gRPC client.
 */

import { createPromiseClient, PromiseClient, Transport } from '@connectrpc/connect';
import { createGrpcTransport } from '@connectrpc/connect-node';
import { MongoRPC } from './gen/mongorpc/v1/mongorpc_connect.js';
import type { MongoRPCClientOptions } from './types';
import { Collection } from './collection';

/**
 * MongoRPCClient provides a connection to a MongoRPC server.
 */
export class MongoRPCClient {
    private readonly transport: Transport;
    private readonly client: PromiseClient<typeof MongoRPC>;
    private readonly options: MongoRPCClientOptions;

    constructor(options: MongoRPCClientOptions) {
        this.options = options;

        // Create gRPC transport
        this.transport = createGrpcTransport({
            baseUrl: options.secure
                ? `https://${options.address}`
                : `http://${options.address}`,
            httpVersion: '2',
        });

        // Create the gRPC client
        this.client = createPromiseClient(MongoRPC, this.transport);
    }

    /**
     * Get a database reference.
     */
    db(name: string): Database {
        return new Database(this, name);
    }

    /**
     * Get the underlying gRPC client for advanced usage.
     */
    get grpcClient(): PromiseClient<typeof MongoRPC> {
        return this.client;
    }

    /**
     * Get the server address.
     */
    get address(): string {
        return this.options.address;
    }

    /**
     * Get authentication headers.
     */
    getHeaders(): Record<string, string> {
        const headers: Record<string, string> = {};
        if (this.options.apiKey) {
            headers['x-api-key'] = this.options.apiKey;
        }
        if (this.options.token) {
            headers['authorization'] = `Bearer ${this.options.token}`;
        }
        return headers;
    }

    /**
     * Close the client connection.
     */
    async close(): Promise<void> {
        // Transport cleanup (if needed)
    }
}

/**
 * Database provides access to collections.
 */
export class Database {
    constructor(
        private readonly client: MongoRPCClient,
        readonly name: string
    ) { }

    /**
     * Get a collection reference.
     */
    collection<T extends Record<string, unknown> = Record<string, unknown>>(name: string): Collection<T> {
        return new Collection<T>(this.client, this.name, name);
    }

    /**
     * Get the underlying gRPC client.
     */
    get grpcClient() {
        return this.client.grpcClient;
    }

    /**
     * Get authentication headers.
     */
    getHeaders() {
        return this.client.getHeaders();
    }

    /**
     * List collections in this database.
     */
    async listCollections(): Promise<string[]> {
        const response = await this.grpcClient.listCollections({
            database: this.name,
        }, { headers: this.getHeaders() });
        return response.collections.map(c => c.name);
    }

    /**
     * Create a new collection.
     */
    async createCollection(name: string): Promise<Collection> {
        await this.grpcClient.createCollection({
            database: this.name,
            collection: name,
        }, { headers: this.getHeaders() });
        return this.collection(name);
    }

    /**
     * Drop a collection.
     */
    async dropCollection(name: string): Promise<void> {
        await this.grpcClient.dropCollection({
            database: this.name,
            collection: name,
        }, { headers: this.getHeaders() });
    }
}
