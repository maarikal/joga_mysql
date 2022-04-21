const express = require('express');
// get using express router
const router = express.Router();
// define article controller and export it for this file
const authorsController = require('../controllers/author');

// use controller functions according to the route
router.get('/:author_id', authorsController.getAuthorsById);

// export article router for using in default application file
module.exports = router;