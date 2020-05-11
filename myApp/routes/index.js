var express = require('express');
var router = express.Router();
var apiRouter = require('./api')
var moviesRouter = require('./movies')
var genresRouter = require('./genres')
var actorsRouter = require('./actors')

/* GET home page. */
router.get('/', function(req, res, next) {
  res.send('Welcome to express')
});

router.use('/api', apiRouter)

router.use('/movies', moviesRouter)
router.use('/genres', genresRouter)
router.use('/actors', actorsRouter)

module.exports = router;
