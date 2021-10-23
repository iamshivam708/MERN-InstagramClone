const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
mongoose.Promise = require('bluebird')

//middleware
const app = express();
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config()

//routes
const UserRouter = require('./routes/User')
app.use('/user',UserRouter)

const FollowRouter = require('./routes/Follow')
app.use('/follow',FollowRouter)

const PostRouter = require("./routes/Post")
app.use('/post', PostRouter)

const CommentRouter = require('./routes/Comment')
app.use('/comment', CommentRouter)

const SavedPOstRouter = require('./routes/SavedPost')
app.use('/saved', SavedPOstRouter)

//database connection
mongoose.connect(process.env.DATABASE).then(() =>{
    console.log("database connected")
}).catch(err =>{
    console.log(err)
})

//listen to server
const port = process.env.port
app.listen(port, ()=>{
    console.log(`App listening to port ${port}`);
})