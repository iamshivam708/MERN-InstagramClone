const mongoose = require("mongoose");

const SavedPostSchema = mongoose.Schema({
    postId:{
        type:String,
        required:true
    },
    userProfile:{
        type:String
    },
    userName:{
        type:String,
        required:true
    },
    userEmail:{
        type:String,
        required:true
    },
    title:{
        type:String
    },
    description:{
        type:String
    },
    image:{
        type:String
    },
    savedEmail:{
        type: String,
        required:true
    }
})

module.exports = mongoose.model("SavedPost", SavedPostSchema)