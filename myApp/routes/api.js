var express = require('express')
var router = express.Router()
var moviesRouters = require('../public/javascripts/movies')
var genresRouter = require('../public/javascripts/genres')
var actorsRouter = require('../public/javascripts/actors')

router.use('/movies', moviesRouters)
router.use('/genres', genresRouter)
router.use('/actors', actorsRouter)

module.exports = router