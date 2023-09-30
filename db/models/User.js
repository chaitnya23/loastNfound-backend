const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    email:String,
    name:String,
    LostObjects:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'LostObjects'
        }
    ],
    FoundObjects:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:'FoundObjects'
        }
    ],
    profilePic:String,

})

const User = mongoose.model('Users', UserSchema);

module.exports = User;