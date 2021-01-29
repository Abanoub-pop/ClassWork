const { Client } = require('pg')
const client = new Client({
    user: 'postgres',
    host: 'localhost',
    database: 'eventplanner',
    password: 'kokolet121',
    port: 5432,
})
client.connect()

client.query('SELECT * FROM attendees2')
    .then(function (results) {
        console.log("succefull");
        console.log(results.rowCount)
        client.end()
    })

    .catch(function (erro) {
        console.log("connection failed");
        console.log(error);
        client.end();
    });

console.log("serving is connecting");