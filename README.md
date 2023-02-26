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
