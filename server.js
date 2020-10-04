const express=require("express")
const bodyParser=require("body-parser")
const mongoose = require('mongoose')
const https=require("https")
const Work=require('./models/Work')
const cors=require("cors")

const app=express()
app.use(bodyParser.urlencoded({extended:true}))
app.use(cors())
app.use(bodyParser.json())

const DB_URL = 'mongodb://localhost:27017/iCrowdTaskDB';
mongoose.connect(DB_URL,{ useNewUrlParser: true ,useUnifiedTopology:true});

app.get('/',(req,res)=>{

const work1={
    taskTitle:"Choice",
    taskDescri:"DO or not",
taskDate:"999",
}
res.send(work1)
})

app.post('/request',(req,res)=>{
//     var task = $('input[name="Task"]:checked').val(); 
// console.log(task)
const work=new Work({
    
    taskType:req.body.Task,
taskTitle:req.body.taskTitle,
taskDescri:req.body.taskDescri,
taskDate:req.body.taskDate,
masterRequire:req.body.require,
reward:req.body.reward,
number:req.body.number
})
work.save()
.catch((err)=>console.log(err))
res.json(('saved to db:'+work))
console.log(req.body)
})



let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}

app.listen(port, (req,res)=>{
    console.log("Server is running successfullly!")
})