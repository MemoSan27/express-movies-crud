const express = require('express');
const genreRouter = require('./genre.router');
const actorRouter = require('./actor.router');
const router = express.Router();

router.use(genreRouter);
router.use(actorRouter);

module.exports = router;