# @mongorpc/client

TypeScript/JavaScript client for MongoRPC - a gRPC proxy for MongoDB.

## Installation

```bash
pnpm add @mongorpc/client
# or npm install @mongorpc/client
```

## Quick Start

```typescript
import { MongoRPCClient, where, orderBy, query, addDoc, getDocs } from '@mongorpc/client';

const client = new MongoRPCClient({ address: 'localhost:50051' });
const db = client.db('mydb');
```

## Two API Styles

### Class-based (ORM-like)

```typescript
const users = db.collection<User>('users');

// CRUD
await users.insertOne({ name: 'Alice', age: 30 });
const user = await users.findById('user-id');
await users.updateById('user-id', { $set: { verified: true } });
await users.deleteById('user-id');

// Fluent queries
const results = await users.query()
  .where('active', true)
  .gte('age', 21)
  .sortDesc('createdAt')
  .limit(10)
  .toArray();
```

### Functional (Firebase-like)

```typescript
import { collection, addDoc, getDoc, getDocs, query, where, orderBy, limit } from '@mongorpc/client';

const users = collection<User>(db, 'users');

// Create
await addDoc(users, { name: 'Alice', age: 30 });

// Query with constraints
const q = query(users, 
  where('active', '==', true),
  where('age', '>=', 21),
  orderBy('createdAt', 'desc'),
  limit(10)
);
const results = await getDocs(q);
```

## FieldValue Helpers

```typescript
import { FieldValue } from '@mongorpc/client';

await users.updateById('user-id', {
  $set: {
    views: FieldValue.increment(1),
    tags: FieldValue.arrayUnion('new-tag'),
    updatedAt: FieldValue.serverTimestamp(),
  }
});
```

## API Reference

### Query Constraints

| Function | Description |
|----------|-------------|
| `where(field, op, value)` | Filter (==, !=, <, <=, >, >=, in, not-in) |
| `orderBy(field, dir)` | Sort (asc/desc) |
| `limit(n)` | Limit results |

### FieldValue

| Method | Description |
|--------|-------------|
| `FieldValue.increment(n)` | Increment number |
| `FieldValue.arrayUnion(...items)` | Add to array |
| `FieldValue.arrayRemove(...items)` | Remove from array |
| `FieldValue.serverTimestamp()` | Server timestamp |
| `FieldValue.delete()` | Delete field |

### Collection Methods

| Method | Description |
|--------|-------------|
| `find(options)` | Find documents |
| `findOne(filter)` | Find single document |
| `findById(id)` | Find by ID |
| `insertOne(doc)` | Insert document |
| `insertMany(docs)` | Insert multiple |
| `updateOne/Many(filter, update)` | Update |
| `deleteOne/Many(filter)` | Delete |
| `countDocuments(filter)` | Count |
| `aggregate(pipeline)` | Aggregation |
| `watch()` | Change stream |
| `query()` | Fluent query builder |

## TypeScript

```typescript
interface User {
  _id?: string;
  name: string;
  email: string;
  age: number;
}

// Type-safe operations
const users = db.collection<User>('users');
await users.insertOne({ name: 'Bob', email: 'bob@test.com', age: 25 });
```

## License

Apache-2.0
