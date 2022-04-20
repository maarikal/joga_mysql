// import database connection
const con = require('../utils/db');

// show all articles - index page
const getAllArticles = (req, res) => {
    let query = "SELECT * FROM article";
    let articles = []
    con.query(query, (err, result) => {
        if (err) throw err;
        articles = result
        res.render('index', {articles: articles})
    })
};

// show articles by this slug
const getArticleBySlug = (req, res) => {
    let query = `SELECT article.slug, article.name, article.image, article.body, article.published, author.names, author.id AS author_id FROM article INNER JOIN author ON article.author_id=author.id WHERE slug="${req.params.slug}"`
    let article;
    con.query(query, (err, result) => {
        if(err) throw err;
        article = result
        console.log(article)
        res.render('article', {article: article})
    });
};


// export controller functions
module.exports = {
    getAllArticles,
    getArticleBySlug
};