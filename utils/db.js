// setup database connection
const mysql = require("mysql");

const db = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
    // here you can set connection limits and other things
    // kasuta järgnevat käsku, kui ei saa ühendust andmebaasiga (lõpus ip-aadress): ping -a 192.168.29.224
});

db.connect(function(err) {
    if(err) throw err;
    console.log('Connected to joga_mysql db')
});

module.exports = db;