const { MongoClient, ObjectID } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server', err);
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');

    // db.collection('Users').deleteMany({ name: "ken" }).then((usr) => {
    //     console.log(JSON.stringify(usr, undefined, 2));
    // }, (err) => {
    //     console.log(err);
    // })

    db.collection('Users').findOneAndDelete({ _id: new ObjectID('5c2d3a2f17dbd29c8dbf12e1') }).then((usr) => {
        console.log(JSON.stringify(usr, undefined, 2));
    })
    console.log(err);
});