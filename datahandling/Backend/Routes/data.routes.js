const express = require('express')
const getRouter = express.Router()
const milestone5 = require('../Model/data.model.js')

getRouter.use(express.json())

getRouter.get('/getuser/:ID',async(req,res)=>{
    try{
        const user = await milestone5.find({ID:req.params.ID})
        res.status(200).json(user)
    }catch(err){
        console.log("error",err)
    }
})

getRouter.get('/getallusers',async(req,res)=>{
    try {
        const users = await milestone5.find();
        res.status(200).json(users);
    } catch (err) {
        console.error(err);
    }
})

module.exports={getRouter}