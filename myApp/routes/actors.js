var express = require('express');
var router = express.Router();
var actorsController = require('../controlers/actors')

router.get('/list', actorsController.list)
router.get('/edit/:id', actorsController.edit)
router.put('/edit/:id', actorsController.editSave)
router.get('/create', actorsController.create)
router.post('/create', actorsController.save)
router.delete('/delete/:id', actorsController.delete)
router.get('/:id', actorsController.detail)

module.exports = router