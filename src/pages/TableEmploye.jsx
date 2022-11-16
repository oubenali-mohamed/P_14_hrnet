import React from 'react'
import { NavLink } from 'react-router-dom'
import TableEmployee from 'oubentable'
// récupération du tableau dans le localStorage
/* let userLocalStorage = localStorage.getItem('user')
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
] */

function TableEmploye() {
  return (
    <div>
      <mohamedtable />
      <NavLink className="link_home_employe" to="/">
        Home
      </NavLink>
    </div>
  )
}
export default TableEmploye
