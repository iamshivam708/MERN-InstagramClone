const mongoose = require("mongoose");

const CommentSchema = mongoose.Schema({
    postId:{
        type:String,
        required: true
    },
    userProfile:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required: true
    }
})

module.exports = mongoose.model("Comment", CommentSchema)
