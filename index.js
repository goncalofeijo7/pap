const express = require('express')
const path = require('path');
const app = express()
 
app.use(express.static('./public'))


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname,'./index.html'))
})

app.get('/navbar', (req, res) =>{
 res.sendFile(path.join(__dirname,'./public/navbar.html'))
})

app.get('/footer', (req, res) =>{
  res.sendFile(path.join(__dirname,'./public/footer.html'))
 })
 

const port = 3000

app.listen(port, () => {
    console.log('Listenning...')
})