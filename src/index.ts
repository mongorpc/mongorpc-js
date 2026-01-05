/**
 * MongoRPC TypeScript Client
 * A type-safe client for interacting with MongoRPC servers.
 */

// Re-export types
export * from './types';
export * from './client';
export * from './document';
export * from './query';
export * from './collection';

// Default export
export { MongoRPCClient } from './client';
