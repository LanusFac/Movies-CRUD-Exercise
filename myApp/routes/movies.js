var express = require('express')
var router = express.Router()
var moviesController = require('../controlers/movies')

router.get('/list', moviesController.list)
router.get('/create', moviesController.create)
router.post('/create',moviesController.saveMovie)
router.delete('/delete/:id', moviesController.delete)
router.get('/edit/:id', moviesController.edit)
router.put('/edit/:id', moviesController.editSave)
router.get('/:id', moviesController.detail)

module.exports = router