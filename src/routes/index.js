const express = require('express');
const genreRouter = require('./genre.router');
const router = express.Router();

router.use(genreRouter);

module.exports = router;