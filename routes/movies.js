const express = require('express')
const router = express.Router()
const { getMovies } = require('../controllers/movies/getMovies')
const { getMovieDetail } = require('../controllers/movies/getMovieDetail')
const { createMovie } = require('../controllers/movies/createMovie')
const { updateMovie } = require('../controllers/movies/updateMovie')
const { deleteMovie } = require('../controllers/movies/deleteMovie')

router.get('/', getMovies)

router.get('/detail/:id', getMovieDetail)

router.post('/create', createMovie)

router.put('/edit/:id', updateMovie)

router.delete('/delete/:id', deleteMovie)

module.exports= router