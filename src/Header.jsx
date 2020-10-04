import React,{useState} from 'react'
import './Header.css'


const style={
fontWeight:'bold',
fontSize:'15px'
};
function Header(){
    const [state,setState]=useState('')
//     const [state,setState]=useState('')
// const handleSelecTask=(event)=>{
// const target=event.target;
// const value=target.type==='SelecTaskbox'?target.SelecTasked:target.value;
// const name=target.name;

// this.setState({
//     [name]:value
// });

// }

  return (
  //   <h1 className='header-div'>{props.text}</h1>
  // )
  
  <div className="navbar">

        
        <ul className="header">
        <li className="n1 first"
           style={style} >
             <p>New Requester Task</p>
        </li>
<li></li>
<li></li>
        <li className="n2">
          <p>Worker Task</p>
        </li>
       </ul>
    <br></br>

   
    </div>
   
  )
  }
export default Header