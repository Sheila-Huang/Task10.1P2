import React from 'react'
import './Header.css'


const Input=(props)=>{
    return <div>
<input type={props.type} name={props.name} placeholder={props.placeholder} 
onChange={props.onChange} 
value={props.value}

/>


    </div>}
    export default Input