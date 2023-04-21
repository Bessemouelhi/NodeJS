const express = require('express');
const app = express();
const mysql = require('mysql');
//const myConnection = require('express-myconnection');
const port = process.env.PORT || 3000;
app.use(express.json());
//app.use(bodyParser.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    port: 3306,
    database: 'euro_fit'
});

module.exports = {app, port, connection}