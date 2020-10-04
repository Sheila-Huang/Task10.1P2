import React from 'react'
import './Header.css'
const style={

fontSize:'12px'
};
const Rendering=(props)=>{

//    const [taskDetail,setTask]=useState('')
//    const handleChange=(e)=>{
// setTask(e.target.value)
//    }
  return (
  //   <h1 className='header-div'>{props.text}</h1>
  // )
  
  <div className="taskset">

        
        <ul className="header">
        <li className="n1 first"
           style={style} >
             <p>Setting up your Task</p>

        </li>
</ul>
{/* <p>Thi is {taskDetail}</p> */}
<span>This is {props.taskType}</span>
<p>and details about {props.taskTitle}</p>
<p>Description: {props.taskDescri}</p>
<p>Expiry Date: {props.taskDate}</p>
    <br></br>



    
    </div>
   
  )
  }

export default Rendering