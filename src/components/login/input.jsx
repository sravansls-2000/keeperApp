import React from 'react'

const Input = (props)=> {
    const {type,placeholder} =props
  return (
 <input type={type} placeholder={placeholder}/>   
  )
}

export default Input