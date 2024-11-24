const Router = require('express')
const router = new Router()
const composeController = require('../controllers/composeController')
const checkRole = require('../middleware/checkRoleMiddleware')

router.post('/', checkRole('ADMIN'),composeController.create)
router.get('/', composeController.getAll)


module.exports = router