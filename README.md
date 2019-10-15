# todo

In this appliction we will be using Mongodb as our database. Mongodb is a no sql database which will help us persist todo information. We are going to explore CRUD operations.

Insert : POST '/todos' route
List: Get '/todos'
Delete:
Update: 
Find:
Eveything in mongoose starts with schema and each schema maps to mongodb collection.

server.js is the root of our application. It contains express route handlers. Whenever you want to run our node app run this file. We create two models todo.js and user.js both are located in model folder. mongoose configuration resides in a folder called db.

The dependencies for this projects are 
1. express framework
2. body-parser: take your json and convert to an object and attach it to req object.
3. expect
4. mocha
5. supertest

All tests will be stored in a file test.server.js in a folder called test.


