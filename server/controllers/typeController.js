const {Wear_Type} = require ('../models/models')
const ApiError = require('../error/ApiError')

class TypeController{
    async create (req, res){
        const{type_name} = req.body
        const type = await Wear_Type.create({type_name})
        return res.json({type})
    }

    async getAll(req, res){
        const types = await Wear_Type.findAll()
        return res.json(types)
    }
}

module.exports = new TypeController()