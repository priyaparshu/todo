# todo

In this appliction, I will be using Mongodb as my database. Mongodb is a no sql database which will help me to persist todo information. I am going to explore CRUD operations.

Insert : POST '/todos' route
List: Get '/todos'
Delete:
Update: 
Find:

server.js is the root of our application. It contains express route handlers. Whenever you want to run the node app, run this file. I created two model files todo.js and user.js.  Both are located in the model folder. 

Eveything in Mongoose starts with schema and each schema maps to mongodb collection. Mongoose configuration resides in a folder called db.

The dependencies for this projects are 
1. express framework
2. body-parser: take your json and convert to an object and attach it to req object.
3. expect
4. mocha
5. supertest

All tests will be stored in a file test.server.js in a folder called test.


