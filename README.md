# mongorpc-js


- Get Document
```ts
const client = new MongoRPC("http://localhost:8080");

const document = await client
  .database("sample_mflix")
  .collection("movies")
  .document("573a13b0f29313caabd35231")
  .get();

console.log(document);

```

- Get All Documents from Collection
```ts

const documents = await client
  .database("sample_mflix")
  .collection("movies")
  .documents()
  .limit(10)
  .skip(10)
  .sort({
    field: "title",
    asending: false,
  })
  .get();

console.log(documents);

```

```ts
const documents = await client
  .database("sample_mflix")
  .collection("movies")
  .documents()
  .where({
    field: "year",
    equalTo: 1915,
  })
  .get();
```

- List All Collections in Database
```ts
const collections = await client
  .database("sample_mflix")
  .listCollections();
```

- Insert Document
```ts
const document = await client
  .database("sample_mflix")
  .collection("movies")
  .insert({
    title: "Blacksmith Scene",
    year: 1893,
    createdAt: Date(),
  });
```

- Update Document
```ts
const result = await client
  .database("sample_mflix")
  .collection("movies")
  .document("617ba6bb72d7eadace3a5353")
  .update({
    title: "Batman Begins",
    year: 2005,
    createdAt: Date(),
  });
```

- Listening for Collection Changes
```ts
const canclationToken = client
  .database("sample_mflix")
  .collection("movies")
  .listen(async (change) => {
    console.log({ change: change });
  });
```