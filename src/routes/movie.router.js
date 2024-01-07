const { getAll, create, getOne, remove, update, setMoviesGenres } = require('../controllers/movie.controller');
const express = require('express');

const movieRouter = express.Router();

movieRouter.route('/movies')
    .get(getAll)
    .post(create);

movieRouter.route('/movies/:id')
    .get(getOne)
    .delete(remove)
    .put(update);

movieRouter.route('/movies/:id/genres')  
    .post(setMoviesGenres)   

module.exports = movieRouter;