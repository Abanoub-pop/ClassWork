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

const getUserById = (request, response) => {
    const id = parseInt(request.params.id)

    client.query('SELECT * FROM attendees2 WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).json(results.rows)
    })
}

const createUser = (request, response) => {
    const { name, email } = request.body

    client.query('INSERT INTO attendees2 (name,address,email,age) VALUES ($1, $2,$3,$4)', [name, address, email, age], (error, results) => {
        if (error) {
            throw error
        }
        response.status(201).send(`User added with ID: ${result.insertId}`)
    })
}

const updateUser = (request, response) => {
    const id = parseInt(request.params.id)
    const { name, address, email, age } = request.body

    client.query(
        'UPDATE attendees2 SET name = $1, address= $2,email = $3, age=$4 WHERE id = $3',
        [name, address, email, age],
        (error, results) => {
            if (error) {
                throw error
            }
            response.status(200).send(`User modified with ID: ${id}`)
        }
    )
}
const deleteUser = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query('DELETE FROM attendees WHERE id = $1', [id], (error, results) => {
        if (error) {
            throw error
        }
        response.status(200).send(`user deleted with ID: ${id}`)
    })
}
module.exports = {
    
    getUserById,
    createUser,
    updateUser,
    deleteUser,
  }