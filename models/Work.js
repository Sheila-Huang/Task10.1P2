const mongoose=require('mongoose')
const workSchema=new mongoose.Schema({

taskTitle:String,
taskDescri:String,
taskDate:String,
taskType:String,
masterRequire:String,
reward:String,
number:String
})

module.exports=mongoose.model("Work",workSchema)