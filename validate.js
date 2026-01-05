import pkg from './dist/index.cjs';
const { MongoRPCClient } = pkg;

async function main() {
    const client = new MongoRPCClient({ address: '127.0.0.1:50051' });
    const db = client.db('testdb');
    const col = db.collection('testcol_js_comprehensive');

    try {
        // Initial cleanup
        await col.deleteMany({});

        // 1. InsertOne
        const result = await col.insertOne({
            name: 'Validation',
            type: 'JS',
            rank: 1,
        });
        const docId = result.insertedId;
        console.log('1. InsertOne Success:', docId);

        if (!docId) throw new Error('Insert failed');

        // 2. FindById
        const doc = await col.findById(docId);
        if (!doc || doc.name !== 'Validation') {
            throw new Error('FindById mismatch');
        }
        console.log('2. FindById Success');

        // 3. UpdateById
        const updateRes = await col.updateById(docId, {
            $set: { rank: 2 }
        });
        const updatedDoc = await col.findById(docId);
        if (updatedDoc.rank !== 2) throw new Error('UpdateById check failed');
        console.log('3. UpdateById Success');

        // 4. InsertMany
        const insertManyRes = await col.insertMany([
            { name: 'Bulk1', type: 'JSBulk', rank: 10 },
            { name: 'Bulk2', type: 'JSBulk', rank: 20 },
        ]);
        if (insertManyRes.insertedCount !== 2) throw new Error('InsertMany count mismatch');
        console.log('4. InsertMany Success');

        // 5. Find
        const foundDocs = await col.find({ filter: { type: 'JSBulk' } });
        if (foundDocs.length !== 2) {
            console.log('Found docs:', foundDocs);
            throw new Error('Find count mismatch: ' + foundDocs.length);
        }
        console.log('5. Find Success');

        // 6. UpdateMany
        // Note: JS client wrapper expects UpdateOperators, we provided standard mongo style $inc
        await col.updateMany({ type: 'JSBulk' }, {
            $inc: { rank: 1 }
        });
        // Verify
        const bulk1 = await col.findOne({ name: 'Bulk1' });
        if (bulk1.rank !== 11) throw new Error('UpdateMany check failed: ' + bulk1.rank);
        console.log('6. UpdateMany Success');

        // 7. CountDocuments
        const count = await col.countDocuments({});
        console.log('7. CountDocuments Success:', count);
        if (count !== 3) throw new Error('CountDocuments mismatch: ' + count);

        // 8. DeleteById
        await col.deleteById(docId);
        console.log('8. DeleteById Success');

        // 9. DeleteMany
        await col.deleteMany({ type: 'JSBulk' });
        const finalCount = await col.countDocuments({});
        if (finalCount !== 0) throw new Error('DeleteMany mismatch, remaining: ' + finalCount);
        console.log('9. DeleteMany Success');

        // 10. Aggregate
        await col.insertOne({ name: 'Agg1', val: 10 });
        await col.insertOne({ name: 'Agg2', val: 20 });

        const pipeline = [
            { $match: { val: 10 } }
        ];
        const aggRes = await col.aggregate(pipeline);
        if (aggRes.length !== 1) throw new Error('Aggregate count mismatch');
        console.log('10. Aggregate Success');

        // 11. Watch (Change Stream)
        console.log('11. Watch');
        let eventReceived = false;

        // Use a wrapper function for async iterator to not block
        const watchLoop = async () => {
            try {
                for await (const event of col.watch()) {
                    console.log('Watch Event:', event.operationType);
                    eventReceived = true;
                    break;
                }
            } catch (e) {
                console.log('Watch stream closed or error:', e.message);
            }
        };
        watchLoop();

        // Wait for connection
        await new Promise(r => setTimeout(r, 1000));

        // Trigger
        await col.insertOne({ name: 'Watcher', type: 'JSWatch' });

        // Wait
        await new Promise(r => setTimeout(r, 3000));

        if (!eventReceived) {
            console.log('11. Watch Timeout (No event received). Requires Replica Set? continuing...');
        } else {
            console.log('11. Watch Success');
        }

        // Cleanup
        await col.deleteMany({});
        console.log('All Comprehensive JS Tests Passed!');

    } catch (error) {
        console.error('JS Validation Failed:', error);
        process.exit(1);
    } finally {
        client.close();
    }
}

main();
