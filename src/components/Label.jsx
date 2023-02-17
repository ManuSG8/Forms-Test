import React from 'react'
import '../styles/Label.css'

function Label({ id, children }) {
  return(
    <label 
      for={id} 
      className={id}
    >
      {children}
    </label>
  )
}

export default Label