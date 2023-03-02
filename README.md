## 3-1-23 TODOs
X 1. Set up a database schema and create students and grades tables WITH INDEXES
2. Seed the students and grades tables with data
3. Update the query layer to fetch data from the database (not json)
4. Update the controller layer to use the queries correctly (if needed)
5. Clean up 
- delete old json files
- remove /tests endpoint


Notes:
What order do you drop the tables in the schema? Drop the grades table before the students table, because grades has a foreign key to students.

Drop the grades table first, because there's nothing that the grades own. There's no dependencies on grades, so you can delete grades safely.

ON DELETE CASCADE - if a student is deleted, it will also delete the student's grades

#### indexes
Databases have indexes, in order to load faster.
Looking for something by ID is easier
the id SERIAL PRIMARY KEY is done automatically
- something we'll be doing often is looking for a particular student's grades
- postgres automatically indexes in the grades table
we want to select * from grades where student_id = $1
```
CREATE INDEX grades_student_id ON grades(student_id);
```
- this will create an index on the student id column in grades
- doing this can increase the speed and efficency of your database


## Deployed backend link on Render
2-22-23 this is the deployed backend - this repo is a copy of Mike's repo
[https://student-app-be-nw-copy.onrender.com](https://student-app-be-nw-copy.onrender.com)


## ElephantSQL
Create a tiny turtle database for this project
- Connect to Postico

## connecting our database
create and switch to a new branch
```
git checkout -b connect-api-to-db
```

### adding pg promise to our database
install pg promise as a dependency
```
npm install pg-promise
```

add DB_URL to .env file, and add the url from elephantSQL

Make a `db` folder with `index.js` to set up the connection

## Connect API to db (deployed on Render)


#### 2-26-23 Notes:
Found some documentation on the configuration object:
[https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object](https://github.com/vitaly-t/pg-promise/wiki/Connection-Syntax#configuration-object)

---


## TODOs
1. Create a server with a healthcheck route
    - X install Express
    - x create app.js
    - x server.js files
    - x create our get / handler (healthcheck route)
    - x listen on a port
    - x listen on a port determined by an envvar

2. Create a GET /students route
    - x grab the hard-coded data from the demo prompt API and create a json file
    - x create the GET /students route handler
    - x add try/catch to handle errors

3. Create a GET /students/:id route
    - x create the GET /students/:id route handler
    - x handle students not found
    - x try catch

NOT TODAY: Refactor into controllers

## Questions to answer
### Creating a server
X Why did Jordan set the main entry point to "app" instead of "server" in the package.json and is there a difference?

X What is the difference between response.send("Hello world!") and the response.json?

X Should we gitignore the .env file?

X If the request gets an error, does it ever make it to the server or does it get an error before it gets to it?

X What if a request causes an error and express is no longer running? How are we going to handle this issue?

### Building routes
x why is it important to have a return inside of an if block when you already have a response?

x Is there a specific order we have to write our routes in our controllers?
