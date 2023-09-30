const LostObject = require("../db/models/LostObject");
const User = require("../db/models/User");


class LostObj_ {

    async create(req, res) {
        try {
            const { imgSrc, name, desc, location, time, owner,owner_roomNo, owner_mobileNo } = req.body;

            const newLostObj = await LostObject.create({
                imgSrc, name, desc, location, time, owner, owner_roomNo, owner_mobileNo ,expireAt:Date.now()
            })

            res.send({
                success: true, 
                data: newLostObj,
                msg: "Lost object successfully created"
            }) 
        } catch (error) {

            res.status(401).json({
                success: false,
                msg: "error in creeating Lost object",
                error
            })
        }
    }

    async get(req, res) {

        const { id } = req.params;

        try {

            const obj = await LostObject.findById(id).populate('owner');
            console.log(obj);

            res.send({
                success: true,
                data: obj,
                msg: `object get successfull with id ${id}`
            })

        } catch (error) {
            res.status(401).json({
                success: false,
                msg: "error in getting the  Lost object",
                error
            })
        }
    }

    async getAll(req,res){

        try {
            
            const objs = await LostObject.find({}).populate('owner').sort({createdAt:-1});

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

  

    async markAsClaimed(req, res) {

        const { _id, userId } = req.body;

        try {

            const result = await LostObject.updateOne({ _id }, { claimed: true });
            res.status(200).send({
                success: true,
                data: result,
                msg: `Claim status updated successfully `
            })

        } catch (error) {
            res.status(401).json({
                success: false,
                msg: "error in updating claimed status",
                error
            })
        }
    }

    async search(req,res){

        const {searchTerm} = req.body;

        try {
            
            const objs = await LostObject.find({ name: { $regex: searchTerm, $options: 'i' } }).populate('owner');

            res.status(200).send({
                success:true,
                msg:"searched lostobjects returned successfully",
                body:objs
            })
        } catch (error) {
            res.status(401).send({
                success:false,
                msg:"error in searching lost items",
                error:error
            })
        }
    }

}

module.exports = LostObj_;