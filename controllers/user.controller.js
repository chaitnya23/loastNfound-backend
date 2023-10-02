const User = require("../db/models/User");

class User_{
    async login(req,res){

        try {
            const {email} = req.body;

            // cheacking for user already exists or not
            const userExist = await User.findOne({email});
            if(userExist) {
                
                res.send({
                    data:userExist
                })
                
            }
            
            
        } catch (error) {
            
            res.status(401).send({
                success:true,
                msg:"error in  user login",
                error
            })
        }

    }

    async signup( req, res){

        const {email,name, profilePic} = req.body;
        try {

            const userExist = await User.findOne({email});
            if(userExist) {
                
                res.status(200).send({
                    msg:"already have an account ,login successfull",
                    data:userExist
                })
                return;
            }
            const newUser = await User.create({email,name, profilePic});

            res.status(201).send({
                success:true,
                msg:"user created successfully",
                data:newUser
            })

        } catch (error) {
            res.status(402).send("error in signing in");
        }
    }

    async sessionAuth(req,res){

        const {id} = req.params;
        try {
            
            const user = await User.findOne({_id:id});
            console.log(user);
            if(user) res.send(user);
            else res.status(401).send("error , unauthrised user");
            
        } catch (error) {
            res.status(401).send({
                success:true,
                msg:"error in authenticating"
            })
        }

    }
}

module.exports = User_;