const { Client } = require('pg');

//instantiates a client to connect to the database, connection settings are passed in
const client = new Client({
    user: '<your db username>',
    host: '<your endpoint>',
    database: '<your database name>',
    password: '<your database password>',
    port: 5432
});

//the lambda funtion code
exports.handler = async (event) => {

    try {

        await client.connect();
        //your code here

    } catch (err) {
        throw err;
        //error message
    }

    client.end();

};