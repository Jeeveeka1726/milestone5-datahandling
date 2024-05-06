require('dotenv').config()
const express = require('express')
const bodyParser=require('body-parser')
const cors = require('cors')
const app = express()
const mongoose = require('mongoose')
const { connectdb,isConnected }= require('./Config/DbConn.js')
const { getRouter } = require('./Routes/data.routes.js')
app.use(cors())

app.use((req,res,next)=>{
    res.header({"Access-Control-Allow-Origin":"*"});
    next()
})

app.use(bodyParser.json())
app.use('/',getRouter)


app.get('/home',(req,res)=>{
    res.json({
        message: isConnected() ? "Database is Connected" : "Database is not connected"
    })
})

app.listen(3000,async()=>{
    await connectdb();
    console.log('Server is running on port 3000')
})