const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    firstName:{
        type:String,
        required:true
    },
    surName:{
        type:String,
        required:true
    },
    userName:{
        type:String,
        required:true,
        unique:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    phone:{
        type:Number,
        required:true
    },
    hashedPassword:{
        type:String,
        required:true
    },
    day:{
        type:String,
        required:true
    },
    month:{
        type:String,
        required:true
    },
    year:{
        type:String,
        required:true
    },
    gender:{
        type:String,
        required:true
    },
    profile:{
        type:String,
        required:true
    },
})

module.exports = mongoose.model("User", UserSchema)