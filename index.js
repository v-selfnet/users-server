const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 5000;

app.use(cors())

app.use(express.json()) // 4 modify data & resend to client

// 1. create data & server
const users = [
    {id: 1, name: 'Ashraful Haque', email: 'vselfnet@gmail.com'},
    {id: 2, name: 'Aaron Haque', email: 'aaron@gmail.com'},
    {id: 3, name: 'Flora Haque', email: 'florat@gmail.com'}
]

// 1. send request form client
app.get('/', (req, res) => {
    res.send('Users Server is Running...')
})

app.get('/users', (req, res) => {
    res.send(users);
})

// 3 receive data from client
app.post('/users', (req, res) => {
    console.log('Request Hitting from Client...')
    console.log(req.body)

    // 4 modify & resend to client
    const newUser = req.body;
    newUser.id = users.length +1;
    users.push(newUser);
    res.send(newUser);
    console.log(newUser)
})
app.listen(port, (req, res) => {
    console.log(`Users Server is Running on Port: ${port}`)
})