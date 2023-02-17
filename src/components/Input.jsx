import React from 'react'
import '../styles/Input.css'

function Input( { type, name, handleChange }) {
  return(
    <input 
      type={type} 
      name={name} 
      id={name} 
      placeholder={name.charAt(0).toUpperCase() + name.slice(1)} 
      onChange={handleChange} 
    />
  )
}

export default Input