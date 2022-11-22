import React from 'react'
import { NavLink } from 'react-router-dom'
import TableEmployee from '../../node_modules/my-table-library/mohamed-table/dist/components/TableEmployee'

// récupération du tableau dans le localStorage
let userLocalStorage = localStorage.getItem('employee')
if (userLocalStorage == null) {
  alert('aucun employée dans la liste')
} else {
  userLocalStorage = JSON.parse(userLocalStorage)
}

const rows = userLocalStorage

const columnsTable = [
  'FirstName',
  'LastName',
  'Date Of Birth',
  'Starte Date',
  'Street',
  'City',
  'State',
  'Zip Code',
  'Department',
]

function TableEmploye() {
  return (
    <div className="table">
      <TableEmployee
        columns={columnsTable}
        rows={rows.map((row) => (
          <>
            <td>{row.firstName}</td>
            <td>{row.lastName}</td>
            <td>{row.city}</td>
            <td>{row.zipCode}</td>
            <td>{row.street}</td>
            <td>{row.state}</td>
            <td>{row.department}</td>
            <td>{row.dateOfBirth}</td>
            <td>{row.startDate}</td>
          </>
        ))}
      />
      <NavLink className="link_home_employe" to="/">
        Home
      </NavLink>
    </div>
  )
}
export default TableEmploye
