import React from 'react'
import { NavLink } from 'react-router-dom'
import TableEmployee from '../../node_modules/table-library-oc/dist/components/TableEmployee'
import '../utils/styles.css'

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
  'Starte Date',
  'Department',
  'Date Of Birth',
  'Street',
  'City',
  'State',
  'Zip Code',
]

function TableEmploye() {
  return (
    <div className="table">
      <TableEmployee columns={columnsTable} rows={rows} />
      <NavLink className="link_home_employe" to="/">
        Home
      </NavLink>
    </div>
  )
}
export default TableEmploye
