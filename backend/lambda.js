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

    let response = {};
    try {
        await client.connect();
        const cat = event.category;
        let query = "SELECT * FROM pois";
        if (cat) query += `WHERE category_name = ${cat}`;
        const result = await client.query(query);
        response = {
            statusCode: 200,
            body: {
                pois: result.rows,
            },
        }
    } catch (err) {
        response = {
            statusCode: 500,
            body: JSON.stringify(err.message),
        }
    }
    client.end();

    return response;
};