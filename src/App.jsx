import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import Footer from './components/Footer';
import Note from './components/Note';
import Notes from './NoteContent'
import Form from './components/login/Form';
import InputAdd from './components/inputForm/inputAdd';


const App=()=> {

  const isLoggedIn = true;
  const isRigistered = true;
  const [print, setPrint] = useState([]);

const addNote=(note)=>{
console.log(note)
setPrint((previousValue)=>
 {return [...previousValue,note]})

}

const DeleteItem=(id)=>{

setPrint((prevItems) => {
  return prevItems.filter((item, index) => {
    return index !== id;
  });
});
}

  return (
    <div className="App">
    {isLoggedIn ? <><Header /> <InputAdd add={addNote}/>{print.map((note,index)=>{
    return  <Note key={index} id={index}title={note.headPart} content={note.contentPart}  onChecked={DeleteItem}/>
  })}<Footer /></>: <Form isRigistered={isRigistered}/>}
    </div>

   
  );
}

export default App;
