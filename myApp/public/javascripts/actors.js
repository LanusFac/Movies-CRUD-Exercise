let express = require('express')
let router = express.Router()
let actorsApiController = require('../../controlers/api/actorApiController')

router.get('/', actorsApiController.list)
router.get('/:id', actorsApiController.detail)

module.exports = router