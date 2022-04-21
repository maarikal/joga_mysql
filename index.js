// application packages
const express = require('express');
const app = express();
const path = require('path');

// add template engine
const hbs = require('express-handlebars');
// setup template engine directory and files extensions
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');
app.engine('hbs', hbs.engine({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: __dirname + '/views/layouts/',
}));
// setup static public directory
app.use(express.static('public'));

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}));

/* Läks utils kasuta db.js faili ning controlleri aricle.js kaustas kutsusime selle käima
const mysql = require('mysql');

// create database connection
let con = mysql.createConnection ({
    host: "localhost",
    user: "root",
    password: "qwerty",
    database: "joga_mysql"
});

con.connect(function(err) {
    if(err) throw err;
    console.log('Connected to joga_mysql db')
}); */

/* see kood läks controllerite kausta article.js faili
// show all articles - index page
app.get('/', (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {articles: articles})
    })
})

// show articles by this slug
app.get('/article/:slug', (req, res) => {
    let query = `SELECT article.slug, article.name, article.image, article.body, article.published, author.names, author.id AS author_id FROM article INNER JOIN author ON article.author_id=author.id WHERE slug="${req.params.slug}"`
    let article;
    con.query(query, (err, result) => {
        if(err) throw err;
        console.log(result)
        article = result
        res.render('article', {article: article})
    });
}) */

// import article and author route
const articleRoutes = require('./routes/article');
const authorsRoutes = require('./routes/author');
// to use article and author routes
app.use('/', articleRoutes);
app.use('/article', articleRoutes);
app.use('/author', authorsRoutes);


/*
// show articles on author page
app.get('/author/:author_id', (req, res) => {
    let query = `SELECT article.slug, article.name, article.image, article.body, article.published, author.names, author.id AS author_id FROM article INNER JOIN author ON article.author_id=author.id WHERE author_id="${req.params.author_id}"`;
    let articles = [];
    let author;
    con.query(query, (err, result) => {
        if(err) throw err;
        articles = result;
        author = result[0];
        res.render('author', {articles: articles, author: author})
    })
}) */



// app start point
app.listen (3000, () => {
    console.log('App is started at http://localhost:3000');
});