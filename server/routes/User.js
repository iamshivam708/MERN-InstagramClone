const express = require('express')
const router = express.Router();
const User = require("../models/User")
const bcrypt = require("bcryptjs");
const nodemailer = require('nodemailer')

const multer = require('multer');
const { rawListeners } = require('../models/User');
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
router.post('/signup',upload.single('profile') ,(req,res) =>{
    User.create({
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

//login 
router.post('/login', async(req,res) =>{
  let user = await User.find().or([{ email: req.body.query }, { userName: req.body.query }])
  if(!user){
    return res.status(200).send({error:'The user not found'})
  }else{
    if(user && bcrypt.compareSync(req.body.password, user[0].hashedPassword)){
      return res.status(200).send({user:user[0]})
    }else{
        return res.status(200).send({error:"password is wrong"})
    }
  }
})

//updating user password with new password after he successfully entered the number given in his gmail
router.post("/update", async (req,res) =>{
  const filter = {email: req.body.email}
  const update = {hashedPassword:bcrypt.hashSync(req.body.password, 10)}
  let user = await User.findOneAndUpdate(filter, update, {
    new: true
  });

  if(!user){
    res.status(200).send('error')
  }
  else{
    return res.status(200).send(user);
  }
})

//get all user except current 
router.post("/getAllUsers", async(req,res) =>{
  await User.find({ email : { $ne : req.body.email } } ).exec((err,user)=>{
    if(err || !user){
      res.send('error')
    }else{
    res.status(200).send(user)
    }
  })
})

//forget password
router.post("/forgot", (req,res) =>{

  const transporter = nodemailer.createTransport({
    service:"hotmail",
    auth:{
      user:"shivam7084371026@outlook.com",
      secure: false,
      pass:"Shivam@123"
    },
    tls: {
      rejectUnauthorized: false
  }
  })
  
  const options = {
    from:"shivam7084371026@outlook.com",
    to:req.body.user,
    subject:"forgot password",
    text:`type this to apply for new password - ${req.body.number}`
  }
  transporter.sendMail(options, function(err, info){
    if(err){
      res.send(err)
      return
    }
    res.send(info.response)
  })
})

module.exports = router