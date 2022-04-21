// import database connection
const con = require('../utils/db');

const getAuthorsById = (req, res) => {
    let query = `SELECT article.slug, article.name, article.image, article.body, article.published, author.names, author.id AS author_id FROM article INNER JOIN author ON article.author_id=author.id WHERE author_id="${req.params.author_id}"`;
    let articles = [];
    let author;
    con.query(query, (err, result) => {
        if(err) throw err;
        articles = result;
        author = result[0];
        res.render('author', {articles: articles, author: author})
    })
};

module.exports = {
    getAuthorsById
};