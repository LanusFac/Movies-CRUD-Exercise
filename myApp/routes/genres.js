let express = require('express')
let router = express.Router()
let genreController = require('../controlers/genre')

router.get('/list', genreController.list)
router.get('/create', genreController.create)
router.post('/create', genreController.saveGenre)
router.delete('/delete/:id', genreController.delete)
router.put('/edit/save/:id', genreController.save)
router.get('/edit/:id', genreController.edit)
router.get('/:id', genreController.detail)

module.exports = router