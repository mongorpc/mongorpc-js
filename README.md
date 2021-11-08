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
