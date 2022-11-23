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
      <div className="Show">
        <label className="labelShow">Show</label>
        <select>
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        <label className="labelEntries">Entries</label>
        <label className="labelSearch">
          Search
          <input type="search" className="search" />
        </label>
      </div>
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
