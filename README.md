# @mongorpc/client

TypeScript/JavaScript client for MongoRPC - a gRPC proxy for MongoDB.

## Installation

```bash
npm install @mongorpc/client
# or
yarn add @mongorpc/client
# or
pnpm add @mongorpc/client
```

## Quick Start

```typescript
import { MongoRPCClient } from '@mongorpc/client';

// Create client
const client = new MongoRPCClient({
  address: 'localhost:50051',
  apiKey: 'your-api-key' // optional
});

// Get a collection
const users = client.db('mydb').collection<User>('users');

// Insert a document
const result = await users.insertOne({
  name: 'Alice',
  email: 'alice@example.com',
  age: 30
});

// Find documents
const docs = await users.find({
  filter: { age: { $gte: 18 } },
  sort: { name: 1 },
  limit: 10
});

// Query builder
const activeUsers = await users.query()
  .where('active', true)
  .gte('age', 21)
  .sortDesc('createdAt')
  .limit(50)
  .toArray();

// Update
await users.updateOne(
  { _id: result.insertedId },
  { $set: { verified: true } }
);

// Delete
await users.deleteOne({ _id: result.insertedId });
```

## API

### MongoRPCClient

```typescript
const client = new MongoRPCClient({
  address: string;      // Server address (host:port)
  secure?: boolean;     // Use TLS (default: false)
  apiKey?: string;      // API key for authentication
  token?: string;       // JWT token for authentication
  timeout?: number;     // Request timeout in ms
});
```

### Collection Methods

| Method | Description |
|--------|-------------|
| `find(options)` | Find documents |
| `findOne(filter)` | Find single document |
| `findById(id)` | Find by ObjectId |
| `insertOne(doc)` | Insert document |
| `insertMany(docs)` | Insert multiple |
| `updateOne(filter, update)` | Update one |
| `updateMany(filter, update)` | Update multiple |
| `deleteOne(filter)` | Delete one |
| `deleteMany(filter)` | Delete multiple |
| `countDocuments(filter)` | Count documents |
| `aggregate(pipeline)` | Run aggregation |
| `watch()` | Watch for changes |
| `query()` | Get fluent query builder |

### Query Builder

```typescript
collection.query()
  .where('field', value)
  .eq('field', value)
  .gt('field', value)
  .in('field', [values])
  .regex('field', 'pattern')
  .select('field1', 'field2')
  .sortAsc('field')
  .limit(10)
  .skip(20)
  .toArray();
```

## Types

Full TypeScript support with type-safe filters and updates:

```typescript
interface User {
  _id?: string;
  name: string;
  email: string;
  age: number;
}

const users = client.db('app').collection<User>('users');

// Type-safe operations
await users.insertOne({ name: 'Bob', email: 'bob@test.com', age: 25 });
await users.updateOne({ name: 'Bob' }, { $inc: { age: 1 } });
```

## License

Apache-2.0
