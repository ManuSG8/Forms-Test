import './App.css';
import Form from './components/Form'
import React, { useState, useEffect } from 'react'
import Table from './components/Table'
import Row from './components/Row'

function App() {
  const [originalUsers, setOriginalUsers] = useState([])
  const [users, setUsers] = useState([])

  const [name, setName] = useState('')
  const [surname, setSurname] = useState('')
  const [age, setAge] = useState()

  const [selected, setSelected] = useState(-1)

  const handleSelect = (index => setSelected(index))

  const handleName = (event) => setName(event.target.value)
  const handleSurname = (event) => setSurname(event.target.value)
  const handleAge = (event) => setAge(event.target.value)

  const handleSubmit = (event) => {
    event.preventDefault()
    setOriginalUsers([...originalUsers, {name, surname, age}])
    setUsers([...users, {name, surname, age}])
  }

  const filterAge = (event) => {
    event.preventDefault()
    const filterAge = originalUsers.filter(user => user.age < 18)
    setUsers(filterAge)
  }

  const showAll = (event) => {
    event.preventDefault()
    setUsers(originalUsers)
  }

  useEffect(() => {
    console.log(originalUsers)
  },[originalUsers])

  return (
    <div className="App">
      <Form 
        handleName={handleName}
        handleSurname={handleSurname}
        handleAge={handleAge}
        handleSubmit={handleSubmit}
        showAll={showAll}
        filterAge={filterAge}
      />
      {
        <Table>
          {
            users.map((user,index) => {
              return(
                <Row
                  selected={selected === index}
                  select={() => handleSelect(index)}
                  name={user.name}
                  surname={user.surname}
                  age={user.age}
                />
              )
            })
          }
          {/* {
            selected !== -1 && (
              <p>{users[selected].age}</p>          
            )
          } */}
        </Table>
      }
    </div>
  );
}

export default App;
