import React from 'react'
import '../styles/Table.css'

function Table({ children }) {
  return(
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Surname</th>
          <th>Age</th>
        </tr>
      </thead>
      <tbody>
        {children}
      </tbody>
    </table>
  )
}

export default Table