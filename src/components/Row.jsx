import React from 'react'
import '../styles/Row.css'

function Row({ selected, select, name, surname, age }) {
  return (
    <tr
      className={selected ? 'selected' : ''}
      onClick={select}
    >
      <td>{name}</td>
      <td>{surname}</td>
      <td>{age}</td>
    </tr>
  )
}

export default Row