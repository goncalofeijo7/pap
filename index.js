const express = require('express')
const path = require('path');
const dotenv = require('dotenv');
const app = express()

dotenv.config({ path: './.env' });

const connection = require('./public/scripts/dbconnect.js');


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

app.get('/cInfo', function(req, res) {
    connection.query('SELECT cardImage, cardTitle, cardDescription  FROM accomodation_cards WHERE accomodationID = 1;;', function(err, result) {
        if (err) {
            console.log('Erro: ' + err)
            throw err;
        } else { //formato json
            res.json(result)
        }
    })
})


const port = 3000

app.listen(port, () => {
    console.log('Listenning...')
})