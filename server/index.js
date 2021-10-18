const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

//middleware
const app = express();
app.use(bodyParser.json())
app.use(cors());
require('dotenv').config()

//routes
const UserRouter = require('./routes/User')
app.use('/user',UserRouter)

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