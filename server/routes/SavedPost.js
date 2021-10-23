const express = require("express");
const router = express.Router();
const SavedPost = require('../models/SavedPost')

router.post("/", async(req, res) =>{
    await SavedPost.create({
        postId: req.body.postId,
        userProfile: req.body.userProfile,
        userName: req.body.userName,
        userEmail:req.body.userEmail,
        title: req.body.title,
        description: req.body.description,
        image: req.body.image,
        savedEmail:req.body.savedEmail
    }).then((result) =>{
        res.status(200).send(result);
    }).catch((err) =>{
        res.status(200).send(err);
    })
})

router.post("/post", async(req,res) =>{
    SavedPost.find({savedEmail: req.body.email}).exec((err,posts) =>{
        if(err || !posts){
            res.status(200).send(err)
        }else{
            res.status(200).send(posts)
        }
    })
})

module.exports = router