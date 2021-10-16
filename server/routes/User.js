const express = require('express')
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const multer = require('multer');
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, '..//../INSTAGRAM-CLONE/instagram/public/user')
    },
    filename: function (req, file, cb) {
      cb(null,file.originalname)
    }
  })
   
  var upload = multer({ storage: storage })

//signup
router.post('/signup',upload.single('profile') ,async (req,res) =>{
    await User.create({
        firstName:req.body.firstName,
        surName:req.body.surName,
        userName:req.body.userName,
        email:req.body.email,
        phone:req.body.phone,
        hashedPassword:bcrypt.hashSync(req.body.hashedPassword, 10),
        day:req.body.day,
        month:req.body.month,
        year:req.body.year,
        gender:req.body.gender,
        profile:req.file.filename,
    },function(err,result){
        if(err || !result){
            res.status(200).send({error: err})
        }else{
            res.status(200).send(result)
        }
    })
})

module.exports = router