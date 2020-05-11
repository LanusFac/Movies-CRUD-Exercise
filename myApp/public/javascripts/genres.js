var express = require('express')
var router = express.Router()
var genreApiController = require('../../controlers/api/genreApiController')

router.get('/', genreApiController.list)

module.exports = router