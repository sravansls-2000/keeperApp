import React from 'react'
import Input from './input'
import './login.css'

const Form=(props)=> {
    const {isRigistered}=props;

    
  return (
<div class="signin"> 

  <div class="content"> 
     <h2>{isRigistered?"Log In":"Rigister"}</h2> 
     <form> 
          <div class="inputBox">  <Input type="text" placeholder="Enter UserName" required/>  </div> 
          <div class="inputBox"> <Input type="password" placeholder="Enter Password" required/> </div> 
          {!isRigistered&&   <div class="inputBox"> <Input type="password" placeholder="Enter confirm password" required/> </div> }
          <div class="inputBox">  <button type="submit">{isRigistered?"Login":"Rigister"}</button></div> 
     </form> 
  </div> 

</div> 

  )
}

export default Form