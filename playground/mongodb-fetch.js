const { MongoClient, ObjectId } = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', { useNewUrlParser: true }, (err, client) => {
    if (err) {
        console.log('Unable to connect to the Mongo server');
    }
    console.log('Connected to Mongo server');

    const db = client.db('TodoApp')


    db.collection('Todos').find().toArray().then((docs) => {
        console.log('Todos');
    })

    //db.collection('Todos').find().toArray().then((docs) => {
    //db.collection('Todos').find({ completed: false }).toArray().then(

    // db.collection('Todos').find({
    //     _id: new ObjectId('5c2bfa4212226f0825a87b2e')
    // }).toArray().then((docs) => {
    //console.log('Todos');

    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    // });


    // db.collection('Todos').find().count().then((count) => {
    //     console.log(`Todos count : ${count}`);
    // }, (err) => {
    //     console.log('Unable to fetch todos', err);
    //});



});