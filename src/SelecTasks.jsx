import React from 'react'

const SelecTask=(props)=>{
    return <div>

<input type={props.type} 
name={props.name} 
onChange={props.onChange} 
value={props.value}
checked={props.checked}

value={props.value}

//defaultChecked={props.State.checked}
/>
</div>
}

export default SelecTask

// import './Header.css'
// import React,{PureComponent} from 'react'

// class SelecTask extends PureComponent{

//     constructor(props) {
//         super(props);
//         this.state = { 
//           task:"Choice Task" // 定义选中的值，如果为空字符串，则默认不选中
//          }
//       }

//   handleOptionChange=(e)=>{

// console.log(e.target.value)
// this.setState({
//     task:e.target.value
// })
//   }

//   render () {
//     return (
//     <ul className="input">
//     <li><p>Select</p></li>
//     <li><input
//     type='radio'
//     name="Task"
//     value="Choice Task"
//     checked={this.state.task === 'Choice Task'} 
//     onChange={this.handleOptionChange}
     
//      //value="Choice Task"
//     /></li>
//     <li>x</li>
//     <li><input
//     type='radio'
//     name= "Task"
//     value="Decision-Making Task"
//     checked={this.state.task === 'Decision-Making Task'} 
//     onChange={this.handleOptionChange}
    
//     /></li>
//     <li>xx</li>

//     <li><input
//     type='radio'
//     name="Task"
//     value="Sentence-Level Task"
//     checked={this.state.task === 'Sentence-Level Task'} 
//     onChange={this.handleOptionChange}
//     //value="Sentence-Level Task"
//     /></li>
//     <li>xxx</li>
//     </ul>
//     );
//   }
// };

// export default  SelecTask;