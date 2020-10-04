import React from 'react'
import './Header.css'
const Button = (props) =>{
    return <div className='Button'>
    <button type = {props.type}  onClick={props.onClick}> {props.text} </button>
</div>
}
export default Button