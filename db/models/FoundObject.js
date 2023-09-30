const mongoose = require('mongoose');

const FoundObjectSchema = new mongoose.Schema({

    imgSrc: String,
    name: {
        type: String,
        maxlength: 30
    },
    returned: Boolean,
    desc: String,
    location: String,
    time: Date,
    foundBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Users'
    },
    foundBy_roomNo:String,
    foundBy_mobileNo:Number,
    comments: [{
        comment: String,
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Users'
        },
        expireAt: { type: Date, expires: '15d' }, 
    }]
})

const FoundObject = mongoose.model('FoundObjects', FoundObjectSchema);
module.exports = FoundObject;