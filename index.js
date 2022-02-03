const express = require('express')
const path = require('path');
const mysql2 = require('mysql2');
const dotenv = require('dotenv');
const app = express()

dotenv.config({ path: './.env' });

const db = mysql2.createConnection({

    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'dbPAP'
})

db.connect((error) => {
    if (error) {
        console.log(error)
    } else {
        console.log("Connected to DataBase")
    }
})

app.use(express.static('./public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './index.html'))
})

app.get('/navbar', (req, res) => {
    res.sendFile(path.join(__dirname, './public/navbar.html'))
})

app.get('/footer', (req, res) => {
    res.sendFile(path.join(__dirname, './public/footer.html'))
})


const port = 3000

app.listen(port, () => {
    console.log('Listenning...')
})