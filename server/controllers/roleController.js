const {Role} = require('../models/models')
const ApiError = require('../error/ApiError')

class RoleController{
    async create(req, res){
        const {name} = req.body
        const role = await Role.create({name})
        return res.json(role)
    }
    async getAll(req, res){
        
    }
}


module.exports = new RoleController()