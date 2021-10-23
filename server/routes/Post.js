const express = require("express");
const router = express.Router();
const Post = require("../models/Post")
const Follow = require("../models/Follow")


const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '..//../INSTAGRAM-CLONE/instagram/public/posts')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

router.post("/", upload.single('image'), async(req,res) =>{
    Post.create({
        userProfile: req.body.userProfile,
        userName: req.body.userName,
        userEmail:req.body.userEmail,
        title: req.body.title,
        description: req.body.description,
        image: req.file.filename
    }).then((result) =>{
        res.status(200).send(result)
    }).catch((err) =>{
        res.status(200).send(err)
    })
})

//get posts of followed users
router.post("/followed/", function(req,res){
    Follow.find({followerEmail: req.body.email}).then(function(followers){

        var posts = []
        followers.map(function(follow){
            posts.push(Post.find({userEmail: follow.userEmail}))
        })
        return Promise.all(posts)

    }).then(function(listOfPosts) {
        res.send(listOfPosts);
    }).catch(function(error) {
        res.status(500).send('one of the queries failed', error);
    });
})

//get all posts
router.get("/", async(req,res) =>{
    await Post.find().exec((err, posts) =>{
        if(err){
            res.status(200).send(err)
        }else{
            res.status(200).send(posts)
        }
    })
})

//get post according to user email
router.post("/user", async(req,res) =>{
    await Post.find({userEmail: req.body.email}).exec((err, posts) =>{
        if(err){
            res.status(200).send(err)
        }else{
            res.status(200).send(posts)
        }
    })
})

//get post count according to user email
router.post("/user/count", async(req,res) =>{
    await Post.find({userEmail: req.body.email}).count((err, count) =>{
        if(err){
            res.status(200).send(err)
        }else{
            res.status(200).send({count: count})
        }
    })
})

//get post from postId
router.get("/user/:id", async(req,res) =>{
    await Post.findById(req.params.id).exec((err, result) =>{
        if(err){
            res.status(200).send(err)
        }else{
            res.status(200).send(result)
        }
    })
})

module.exports = router