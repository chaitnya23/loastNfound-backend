const mongoose = require('mongoose');

const FeedBackSchema = new mongoose.Schema({

    userEmail:String,
    rating:Number,
    context:String
})

const FeedBack = mongoose.model('FeedBack', FeedBackSchema);
module.exports = FeedBack;