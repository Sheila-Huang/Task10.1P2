import React,{useState} from 'react'
import './Header.css'
import SelecTask from './SelecTasks';
import Input from './Input'
const style={

fontSize:'12px'
};
function TaskRequire(){

 
  return (
  //   <h1 className='header-div'>{props.text}</h1>
  // )
  
  <div className="taskrequire">

        
        <ul className="header">
        <li className="n1 first"
           style={style} >
             <p>Worker Requirment</p>
        </li>
</ul>
    <br></br>
    
    </div>
   
  )
  }

export default TaskRequire