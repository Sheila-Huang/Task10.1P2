
import React ,{useState}from 'react'
import './Header.css'
import Header from'./Header'
import Input from './Input'
import Description from './TaskDescri'
import Rendering  from './Rendering'
import TaskRequire from './TaskRequire'
import Button from './Button'
import SelecTask from './SelecTasks';


import ReactDOM from "react-dom";
//import { useForm } from "react-hook-form";
const style={

fontSize:'12px'
};

const CheckType=(props)=>{

// const [taskTitle,setTitle]=useState('')
// const [taskDescri,setDescri]=useState('')
// const [taskDate,setDate]=useState('')
const [taskInfor,setInfor]=useState({
    taskTitle:'',
    taskDescri:'',
    taskDate:''
})

const [taskRequire,setRequire]=useState({
    reward:'',
    number:'',
    
})
const handleChange=(e)=>{
    // const value=e.target.value
    // const name=e.target.name
    const {value,name}=e.target

    setInfor((preValue)=>{

return{
    ...preValue,
    [name]:value

}})
setRequire((preValue)=>{

    return{
        ...preValue,
        [name]:value
    
    }
    })
       
}
    const [taskType,setTask]=useState('')
    const [masterRequire,setMaster]=useState('')
//const [data]=useState({task1:"Choice Task",task2:"Desicion Task",task3:"Sentence Task"})

const handleSelecTask=(e)=>{
   const value=e.target.value
   console.log(value)
   setTask(value)

}

const handleRequire=(e)=>{
    const value=e.target.value
    console.log(value)
    setMaster(value)
 
 }
var radios = document.getElementsByName('Task');
var task = '';
for(var i=0;i<radios.length;i++)
{
   if(radios[i].checked)
     task = radios[i].value;
     //console.log(task)
}
var radios = document.getElementsByName('require');
var require = '';
for(var i=0;i<radios.length;i++)
{
   if(radios[i].checked)
     require = radios[i].value;
     //console.log(task)
}
const handleClick=()=>{

    fetch('http://localhost:3000/request',{
        method:'post',
        headers:{'Content-Type':'application/json'},
        body:JSON.stringify({
            taskType:task,
            taskTitle:taskInfor.taskTitle,
            taskDescri:taskInfor.taskDescri,
            taskDate:taskInfor.taskDate,
            masterRequire:require,
            reward:taskRequire.reward,
            number:taskRequire.number

        })
    })
    .then(response=>response.json())
    .then(data=>console.log(data))
    .catch(err=>{
        
    console.log("Error:"+err)

    })
}

    return (
<div>
<Header />

<ul className="input">
<li><p>Select</p></li>
<li><SelecTask
type='radio'
name="Task"

//checked={taskSelect}
checked={taskType==="Choice Task"}
 onChange={handleSelecTask}
 value="Choice Task"
 
 //ref={register}
 //value="Choice Task"
/></li>
<li>Choice Task</li>
<li><SelecTask
type='radio'
name= "Task"

value="Decision-Making Task"
//ref={register} 
checked={taskType==="Decision-Making Task"}
onChange={handleSelecTask}
//value="Decision-Making Task"
/></li>
<li>Decision-Making Task</li>
<li><SelecTask
type='radio'
name="Task"

value="Sentence-Level Task"
//ref={register}
checked={taskType==="Sentence-Level Task"}
onChange={handleSelecTask}
//value="Sentence-Level Task"
/></li>
<li>Sentence-Level Task</li>
</ul>

<Description />
<br></br>

<ul className="input">
<li><p>Title</p></li>
<li><Input type="text"
name='taskTitle'
placeholder='Enter task title'
onChange={handleChange}
value={taskInfor.taskTitle}
/></li>
</ul>
<ul className="input">
<li><p>Description</p></li>
<li><Input type="text"
name='taskDescri'
placeholder='Enter task description'
onChange={handleChange}
value={taskInfor.taskDescri}
/></li>
</ul>
<ul className="input">
<li><p>Expire Date</p></li>
<li><Input type="text"
name='taskDate'
placeholder=''
onChange={handleChange}
value={taskInfor.taskDate}
/></li>
</ul>
 {/* <span>This is {taskType}</span>  */}
<Rendering 
//state={taskSelect}
taskType={taskType}
taskTitle={taskInfor.taskTitle}
taskDescri={taskInfor.taskDescri}
taskDate={taskInfor.taskDate}
/>


<TaskRequire />
<ul className="input">
<li><p>Require Master Workers</p></li>
<li><SelecTask
type='radio'
name="require"
value="yes"
checked={masterRequire==="yes"}
onChange={handleRequire}
/></li>
<li>yes</li>
<li><SelecTask
type='radio'
name="require"
value="no"
//ref={register}
checked={masterRequire==="no"}
onChange={handleRequire}

/></li>
<li>no</li>

</ul>
<ul className="input">
<li><p>Reward per response</p></li>

<li><Input type="text"
placeholder=''
name="reward"
value={taskRequire.reward}
onChange={handleChange}
/></li>
</ul>
<ul className="input">
<li><p>Number of workers</p></li>
<li><Input type="text"
placeholder=''
name="number"
value={taskRequire.number}
onChange={handleChange}
/></li>
</ul>
<Button
type='submit'
text='Save'
onClick={handleClick}
/>

</div>
)

}
export default CheckType