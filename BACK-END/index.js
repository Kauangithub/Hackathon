const express=require('express')
const cors = require('cors');

const app = express();
app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(cors());

const PORT = 3333;

app.listen(PORT, () => 
{console.log("Tudo funcionando chefia 😎👍")}
);

const mysql = require('mysql2/promise')
const connection = mysql.createPool({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: ''
})