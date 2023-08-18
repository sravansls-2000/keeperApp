import React, { useState } from 'react'
import "./inputAdd.css"

function InputAdd(props) {
    const [todo, setTodo] = useState({headPart:"",contentPart:""});
 
    const handleChange = (e) => {
      const { value ,name } = e.target;
      setTodo(previousValue=>{
        return {...previousValue,[name]:value}
      });
    };
    const handleClick = () => {
     props.add(todo)
     setTodo({headPart:"",contentPart:""})
    };
  return (
   <div className="container">
    <div className="form">
    <input value={todo.headPart} name="headPart" onChange={handleChange} type="text" />
    <textarea value={todo.contentPart} name="contentPart" onChange={handleChange} type="text" />
   <button onClick={handleClick}>
      <span>Add</span>
    </button></div></div>
  )
}

export default InputAdd