const FeedBack = require("../db/models/feedBack");

class FeedbackActions_{

    async add(req,res){

        // console.log(req.body);
        const {rating,context,userEmail} = req.body;

        try {
            
            const newFeedback = await FeedBack.create({rating,context,userEmail});
            res.send(newFeedback);

        } catch (error) {
            console.log(error);
        }
    }
    async get(req,res){

        try {
            
            const feedbacks = await FeedBack.find();
            res.send(feedbacks);

        } catch (error) {
            
            console.log(error);
        }
    }
}

module.exports = FeedbackActions_;