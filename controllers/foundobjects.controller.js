const FoundObject = require("../db/models/FoundObject");

class FoundObj_{

    async create(req,res){
        try {
            const {imgSrc, name, desc, location, time, foundBy, foundBy_roomNo, foundBy_mobileNo} = req.body;

            const newFoundObj = await FoundObject.create({
                imgSrc, name, desc, location, time, foundBy ,expireAt:Date.now()
            })

            res.send({
                success:true,
                data:newFoundObj,
                msg:"found object successfully created"
            })
        } catch (error) {
            
            res.status(401).json({
                success:false,
                msg:"error in creeating found object",
                error
            })
        }
    }

    async getAll(req,res){

        try {
            
            const objs = await FoundObject.find({}).sort({createdAt:-1});

            res.send({
                success: true,
                body: objs,
                msg: `object retrived successfully `
            })

        } catch (error) {
            
            res.status(401).json({
                success: false,
                msg: "error in getting all  Lost object",
                error
            })
        }
    }

    async get(req,res){

        const {id} = req.params;
         console.log(id);
        try {
            
            
            const obj = await FoundObject.findById(id).populate('foundBy');
            console.log(obj);
    
            res.send({
                success:true,
                data:obj,
                msg:`object get successfull with id ${id}`
            })

        } catch (error) {
            res.status(401).json({
                success:false,
                msg:"error in getting the  found object",
                error
            })
        }
    }

    async search(req,res){

        const {searchTerm} = req.params;
        console.log(searchTerm);
        try {
            
            const objs =  await FoundObject.find({
                name:searchTerm
            })
            console.log(objs);

            res.send({
                success:true,
                data:objs,
                msg:`objects search successfull for ${searchTerm}`
            })

        } catch (error) {
            
            res.status(401).json({
                success:false,
                msg:"error in getting the  found objects",
                params:searchTerm,
                error
            })
        }
    }

    
}

module.exports = FoundObj_;