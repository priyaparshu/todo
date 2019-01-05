const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    const db = client.db('TodoApp');

    if (err) {
        console.log('Unable to connect to mongo db server', err);
    }
    console.log('Connected to MongoDB server');

    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5c2cfc1fbeb5811590bcc255')
    }, {
            //         $set: {
            //             text: 'Clean House'
            //         }
            //     }, {
            //         returnOriginal: true
            //     }).then(result => {
            //         console.log(JSON.stringify(result, undefined, 2));
            //     })

            $set: { name: 'Claire' }, $inc: { age: 1 }
        },
        {
            returnOriginal: true
        }).then((result) => {
            console.log(JSON.stringify(result, undefined, 2));
        })

})
