const mysql = require('mysql');
const dotenv = require('dotenv').config();

const db = mysql.createConnection({
    host: process.env.HOST,
    user: process.env.DATABASE_USER,
    password: process.env.PASSWORD,
    database: process.env.DATABASE
});

db.connect(err => {
    if (err) throw err;
    console.log('Database connected!');
});

module.exports = db;
