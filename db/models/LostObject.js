const mongoose = require('mongoose');

const LostObjectSchema = new mongoose.Schema({

    imgSrc:String,
    name:{
        type:String,
        maxlength:30
    },
    claimed:{
        type:Boolean,
        default:false
    },
    desc:String,
    location:String,
    time:Date,
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users' 
    },
    owner_roomNo:String,
    owner_mobileNo:String,
    comments:[{
        comment:String,
        user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'Users'
        }
    }],
    expireAt: { type: Date, expires: '15d' }, 
},{timestamps:true})

const LostObject = mongoose.model('LostObjects', LostObjectSchema);
module.exports = LostObject;