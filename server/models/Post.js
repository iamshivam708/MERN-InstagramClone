const mongoose =  require("mongoose")

const PostSchema = mongoose.Schema({
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
    }
})

module.exports = mongoose.model("Post", PostSchema)