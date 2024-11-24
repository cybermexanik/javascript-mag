const {Wear_Composition} = require ('../models/models')
const ApiError = require('../error/ApiError')

class ComposeController{
    async create (req, res){
        const{percentage} = req.body
        const compose = await Wear_Composition.create({percentage})
        return res.json({compose})
    }

    async getAll(req, res){
        const composes = await Wear_Composition.findAll()
        return res.json(composes)
    }
}

module.exports = new ComposeController()