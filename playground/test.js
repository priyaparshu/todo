const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        return console.log('Unable to connect to mongo db server');
    }
    console.log('Connected to MongoDB server');

    const db = client.db('TodoApp');



    db.collection('Users').find({ name: 'Priya' }).toArray().then((usr) => {
        //console.log(usr);
        console.log(JSON.stringify(usr, undefined, 2));
    }, (err) => {
        console.log('Unable to fetch users', err);
    });

});
