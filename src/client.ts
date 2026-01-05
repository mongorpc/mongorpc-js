/**
 * MongoRPC Client
 */

import * as grpc from '@grpc/grpc-js';
import type { MongoRPCClientOptions } from './types';
import { Collection } from './collection';

/**
 * MongoRPCClient provides a connection to a MongoRPC server.
 */
export class MongoRPCClient {
    private readonly address: string;
    private readonly credentials: grpc.ChannelCredentials;
    private readonly metadata: grpc.Metadata;
    private readonly options: MongoRPCClientOptions;

    constructor(options: MongoRPCClientOptions) {
        this.options = options;
        this.address = options.address;

        // Set up credentials
        this.credentials = options.secure
            ? grpc.credentials.createSsl()
            : grpc.credentials.createInsecure();

        // Set up metadata for authentication
        this.metadata = new grpc.Metadata();
        if (options.apiKey) {
            this.metadata.set('x-api-key', options.apiKey);
        }
        if (options.token) {
            this.metadata.set('authorization', `Bearer ${options.token}`);
        }
    }

    /**
     * Get a database reference.
     */
    db(name: string): Database {
        return new Database(this, name);
    }

    /**
     * Get the server address.
     */
    get serverAddress(): string {
        return this.address;
    }

    /**
     * Get gRPC credentials.
     */
    get channelCredentials(): grpc.ChannelCredentials {
        return this.credentials;
    }

    /**
     * Get authentication metadata.
     */
    get authMetadata(): grpc.Metadata {
        return this.metadata;
    }

    /**
     * Close the client connection.
     */
    async close(): Promise<void> {
        // gRPC channels are managed automatically
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
     * List collections in this database.
     */
    async listCollections(): Promise<string[]> {
        // TODO: Implement via gRPC
        return [];
    }

    /**
     * Create a new collection.
     */
    async createCollection(name: string): Promise<Collection> {
        // TODO: Implement via gRPC
        return this.collection(name);
    }

    /**
     * Drop a collection.
     */
    async dropCollection(name: string): Promise<boolean> {
        // TODO: Implement via gRPC
        return true;
    }
}
