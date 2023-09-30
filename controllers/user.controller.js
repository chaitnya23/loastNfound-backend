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
            
            // // verifying collage email address
            // if(!email.includes("@iiitdwd.ac.in")){
                
            //     console.log("test");
            //     res.status(204).send({
            //         body:"collage email id not used "
            //     })
            // }
            
        } catch (error) {
            
            res.status(401).send({
                success:true,
                msg:"error in  user login",
                error
            })
        }

    }

    async signup( req, res){

        const {email,name, profilePic, roomNo, contact} = req.body;
        try {

            const userExist = await User.findOne({email});
            if(userExist) {
                
                res.status(401).send({
                    msg:"already have an account"
                })
            }
            const newUser = await User.create({email,name, profilePic, roomNo, contact});

            res.send({
                success:true,
                msg:"user created successfully",
                data:newUser
            })

        } catch (error) {
            
        }
    }

    async sessionAuth(req,res){

        const {id} = req.params;
        try {
            
            const user = await User.findOne({_id:id});
            console.log(user);
            res.send(user)
            
        } catch (error) {
            res.status(401).send({
                success:true,
                msg:"error in authenticating"
            })
        }

    }
}

module.exports = User_;