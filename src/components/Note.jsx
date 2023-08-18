import React from 'react';


const Note =(props)=> {

const deleteNote =()=>{
props.onChecked(props.id)
}

  return (
    <div className='note'>
    <h1>{props.title}</h1>
    <p>{props.content}</p>
    <button onClick={deleteNote} style={{marginTop:"30px",marginLeft:"150px"}}><span>Delete</span></button>
    </div>
  )
}

export default Note