const catchError = require('../utils/catchError');
const Movie = require('../models/Movie');
const Genre = require('../models/Genre');

const getAll = catchError(async(req, res) => {
    const movies = await Movie.findAll({ include: [Genre]});
    return res.json(movies);
});

const create = catchError(async(req, res) => {
    const movie = await Movie.create(req.body);
    return res.status(201).json(movie);
});

const getOne = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie) return res.sendStatus(404);
    return res.json(movie);
});

const remove = catchError(async(req, res) => {
    const { id } = req.params;
    await Movie.destroy({ where: {id} });
    return res.sendStatus(204);
});

const update = catchError(async(req, res) => {
    const { id } = req.params;
    const movie = await Movie.update(
        req.body,
        { where: {id}, returning: true }
    );
    if(movie[0] === 0) return res.sendStatus(404);
    return res.json(movie[1][0]);
});

const setMoviesGenres = catchError(async(req, res) => {
    const {id} = req.params;
    const movie = await Movie.findByPk(id);
    if(!movie) return res.status(404).json({message: "Genre not found"})
    await movie.setGenres(req.body);
    const genres = await movie.getGenres();
    return res.json(genres);
})

module.exports = {
    getAll,
    create,
    getOne,
    remove,
    update,
    setMoviesGenres,
}