const Router = require('express')
const router = new Router()
const userRouter = require('./userRouter')
const wearRouter = require('./wearRouter')
const roleRouter = require('./roleRouter')
const deliveruRouter = require('./deliveryRouter')
const cartRouter = require('./cartRouter')

router.use('/user', userRouter)
router.use('/cart', cartRouter)
router.use('/wear', wearRouter)
router.use('/delivery', deliveruRouter)
router.use('/role', roleRouter)

module.exports = router