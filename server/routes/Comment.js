const express = require("express");
const router = express.Router();
const Comment = require('../models/Comment')

router.post('/', async(req, res) =>{
    Comment.create({
        postId: req.body.postId,
        userProfile: req.body.userProfile,
        userName: req.body.userName,
        userEmail: req.body.userEmail,
        comment: req.body.comment
    }).then((result) =>{
        res.status(200).send(result)
    }).catch((err) =>{
        res.status(200).send(err)
    })
})

router.get('/:id', async(req,res) =>{
    Comment.find({postId: req.params.id}).exec((err, comments) =>{
        if(err || !comments){
            res.status(200).send(err)
        }else{
            res.status(200).send(comments);
        }
    })
})

module.exports = router