const mongoose = require('mongoose')
const Schema = mongoose.Schema

const details= new Schema({
    ID:{type:Number},
    Name:{type:String},
    Hobbies:{type:String}
})

const Model = mongoose.model("milestone5",details)

module.exports=Model
