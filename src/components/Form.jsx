import React from 'react'
import Input from './Input'
import Label from './Label'
import Button from './Button'
import '../styles/Form.css'

function Form({ handleSubmit, handleName, handleSurname, handleAge, showAll, filterAge}) {
  return(
    <form action='public.html'>
      <Label id='name'>Name </Label><Input type='text' name='name' handleChange={handleName} /><br />
      <Label id='surname'>Surname </Label><Input type='text' name='surname' handleChange={handleSurname} /><br />
      <Label id='age'>Age </Label><Input type='number' name='age' handleChange={handleAge} /><br />
      
      <div className="buttons">
        <Button type='submit' handleClick={handleSubmit}>Submit</Button>        
        <Button type='all' handleClick={showAll}>All</Button>
        <Button type='less18' handleClick={filterAge}>Less than 18</Button>
      </div>
    </form>
  )
}

export default Form