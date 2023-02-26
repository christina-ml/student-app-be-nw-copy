// pgp object that knows how to connect to the db, we are invoking the function as soon as we require the code
// pgp promise object
const pgp = requre('pg-promise')();

// allows us to read values out of the dotenv file and treat them as environment variables.
require('dotenv').config();

// databaseURL is going to hold the connection string (DB_URL from elephantSQL)
// going to find a variable called port which is set to 8888
const databaseUrl = process.env.DB_URL;

// configuration object
// 1. connectionString: how to connect to our database (server, postgres database, username, and password -> all in one string)
// 2. allowExitOnIdle: if you're running tests or unit tests that use a database connection, the tests will never end because they'll stay connected to the database forever, which is bad. If your database isn't used for a long time (a short amount of seconds), then it will exit and your unit test process will also finish.
// 3. max: sets the size called the `connection pool`. `Connection pool` is a bunch of little processes that are all connected to your database, and can all handle a SQL query, and all run almost concurrently/they don't have to wait for the other to start running or start issuing a command.
// max 30 means we can have as many as 30 of these open connections at any time, sitting in what's called the `connection pool`.
// the larger this number is, the more simulatneous SQL queries we can handle, but the more connections we have also increases our memory usage overhead, so there has to be a middle number where we have enough connections so that users aren't blocked waiting for a connection to the database. 
const cn = {
    connectionString: databaseUrl,
    allowExitOnIdle: true,
    max: 30,
};

// pass in connection/`cn` obj to `db` variable that we export
const db = pgp(cn);

// database obj we can use to make sql queries to our database
module.exports = db;