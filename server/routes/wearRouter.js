const Router = require('express')
const router = new Router()
const wearController = require('../controllers/wearController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),wearController.create)
router.get('/', wearController.getAll)
router.get('/:id', wearController.getOne)

module.exports = router