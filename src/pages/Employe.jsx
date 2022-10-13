import React from 'react'
import Table from 'react-bootstrap/Table'
import { NavLink } from 'react-router-dom'

function Employe() {
  return (
    <div>
      <div className="containerSearch">
        <label className="label_Title">Show</label>
        <select className="showEntries">
          <option>10</option>
          <option>25</option>
          <option>50</option>
          <option>100</option>
        </select>
        entries
        <label className="search" for="search">
          Search:
        </label>
        <input type="search" id="search" name="search"></input>
      </div>
      <Table className="tableEmploye" striped bordered size="sm">
        <thead>
          <tr>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Start Date</th>
            <th>Department</th>
            <th>Date of Birth</th>
            <th>Street</th>
            <th>City</th>
            <th>State</th>
            <th>Zip Code</th>
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </Table>
      <NavLink className="link_home_employe" to="/">
        Home
      </NavLink>
    </div>
  )
}
export default Employe
