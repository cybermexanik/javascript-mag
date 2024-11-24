const ApiError = require('../error/ApiError');
const bcrypt = require('bcrypt')
const {User, Cart} = require('../models/models')
const jwt = require('jsonwebtoken')

const generateJwt = (id, email) => {
    return jwt.sign({id, email}, process.env.SECRET_KEY, {expiresIn: '24h'})
}

class UserController{
    async registration(req, res, next){
        const {name, surname, middlename, login, email, password} = req.body
        if(!name || !surname || !middlename || !login|| !email || !password){
            return next(ApiError.badRequest('Некорректные данные'))
        }
        const candidate = await User.findOne({where: {name, surname, middlename, login, email, password}})
        if (candidate){
            return next(ApiError.badRequest('Пользователь с таким email уже существует'))
        }
        const hashPassword = await bcrypt.hash(password, 5)
        const user = await User.create({name, surname, middlename, login, email, password: hashPassword})
        const cart = await Cart.create({userId: user.id})
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }
    async login(req, res, next){
        const {email, password} = req.body
        const user = await User.findOne({where: {email}})
        if (!user){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, user.password)
        if(!comparePassword){
            return next(ApiError.internal('Указан неверный пароль'))
        }
        const token = generateJwt(user.id, user.email)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.user.id, req.user.email)
        return res.json({token})
    }
}


module.exports = new UserController()