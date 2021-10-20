const express = require('express')
const router = express.Router();
const Follow = require("../models/Follow");

//getting user following
router.post("/", async ( req, res ) =>{
    await Follow.find({followerEmail: req.body.email}).count((err, count) =>{
        if(err || !count){
            res.status(200).send(err);
        }else{
            res.status(200).send({count:count});
        }
    })
})

//getting user followers
router.post("/followers", async ( req, res ) =>{
    await Follow.find({userEmail: req.body.email}).count((err, count) =>{
        if(err || !count){
            res.status(200).send(err);
        }else{
            res.status(200).send({count:count});
        }
    })
})

module.exports = router