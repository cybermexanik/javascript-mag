const {Wear} = require('../models/models')
const uuid = require('uuid')
const path = require ('path');
const ApiError = require('../error/ApiError')

class WearController{
    async create(req, res, next){
    try{
        const {wear_name, cost, typeId, sizeId, composeId} = req.body
        const {img} = req.files

        if (!wear_name || !cost || !typeId || !sizeId || !composeId || !img) {
            return next(ApiError.badRequest('Недостаточно данных для создания одежды'))
        }

        let fileName = uuid.v4()+".png"
        img.mv(path.resolve(__dirname,'..', 'static', fileName))

        const wear = await Wear.create({wear_name, cost, typeId, sizeId, composeId, img: fileName})

        return res.json(wear)
    }   catch (e){
            next(ApiError.badRequest(e.message))
        }
    }
    async getAll(req, res){
        const {typeId, sizeId} = req.query
        let wears;
        if(!typeId && !sizeId){
            wears = await Wear.findAll()
        }
        if(typeId && !sizeId){
            wears = await Wear.findAll({where:{typeId}})
        }
        if(!typeId && sizeId){
            wears = await Wear.findAll({where:{sizeId}})
        }
        if(typeId && sizeId){
            wears = await Wear.findAll({where:{typeId, sizeId}})
        }
        return res.json(wears)
    }
    async getOne(req, res){
        
    }
}


module.exports = new WearController()