class WearController{
    async create(req, res){
        const {name} = req.body
        const wear = await Wear.create({name})
        return res.json(wear)
    }
    async getAll(req, res){
        
    }
    async getOne(req, res){
        
    }
}


module.exports = new WearController()