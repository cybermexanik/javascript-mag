const {Wear_Size} = require ('../models/models')
const ApiError = require('../error/ApiError')

class SizeController{
    async create (req, res){
        const{size_name} = req.body
        const size = await Wear_Size.create({size_name})
        return res.json({size})
    }

    async getAll(req, res){
        const sizes = await Wear_Size.findAll()
        return res.json(sizes)
    }
}

module.exports = new SizeController()