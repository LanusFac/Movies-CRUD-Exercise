var express = require('express')
var router = express.Router()
var moviesApiController = require('../../controlers/api/movieApiController')

router.get('/', moviesApiController.list)
router.get('/:id', moviesApiController.detail)

module.exports = router