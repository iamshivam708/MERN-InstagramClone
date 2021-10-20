const mongoose = require("mongoose");

const FollowSchema = mongoose.Schema({
    userEmail:{
        type:String,
        required: true
    },
    followerEmail:{
        type:String,
        required:true
    }
})

module.exports = mongoose.model("Follow", FollowSchema)