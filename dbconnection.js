const mysql = require("mysql2");
require('dotenv').config({path: './private/.env'})

const connection = mysql.createConnection({
    host: process.env._HOST,
    user: process.env._USERNAME,
    password: process.env._PASSWORD,
    database: process.env._DATABASE,
    port: process.env._PORT
})

connection.connect(function(err){
    if(err){
        throw err;
    }else{
        console.log('Connected to DataBase: ' + process.env._DATABASE);
    }
})

module.exports=connection;