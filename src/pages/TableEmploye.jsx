import React from 'react'
import { NavLink } from 'react-router-dom'
import TableEmployee from '../../node_modules/ma-librairie-table/dist/components/TableEmployee'
import ShowList from '../components/ShowList/ShowList'
import Search from '../components/Search/Search'
import ShowPages from '../components/ShowPages/ShowPages'
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
      <div className="headerSearch">
        <ShowList />
        <Search />
      </div>
      <TableEmployee columns={columnsTable} rows={rows} />
      <ShowPages />
      <NavLink className="link_home_employe" to="/">
        Home
      </NavLink>
    </div>
  )
}
export default TableEmploye
