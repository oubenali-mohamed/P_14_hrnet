import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal'
import Alert from 'react-bootstrap/Alert'
import '../utils/styles.css'
import dataState from '../datas/dataState.json'
import DatePicker from '../components/DatePicker/DatePicker'

let cities = ''
let departments = ''
let FirstName = ''
let LastName = ''
let DateOfBirth = ''
let StarteDate = ''
let Street = ''
let City = ''
let State = ''
let ZipCode = ''
let Department = ''

function Home() {
  const [validated, setValidated] = useState(false)
  const [show, setShow] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }
    setValidated(true)
  }

  departments = dataState[0].department
  cities = dataState[0].ville

  const handleChange = (event) => {
    // console.log(event.target.value)
    FirstName = document.querySelector('.firstName').value
    LastName = document.querySelector('.lastName').value
    City = document.querySelector('.city').value
    ZipCode = document.querySelector('.zipCode').value
    Street = document.querySelector('.street').value
    State = document.querySelector('.SelectState').value
    Department = document.querySelector('.SelectDepartment').value
    let inputDateBirth = document.querySelectorAll('.inputDate')[0].value
    DateOfBirth = inputDateBirth
    let inputDateStart = document.querySelectorAll('.inputDate')[1].value
    StarteDate = inputDateStart
  }

  let employee = {
    firstName: FirstName,
    lastName: LastName,
    city: City,
    zipCode: ZipCode,
    street: Street,
    state: State,
    department: Department,
    dateOfBirth: DateOfBirth,
    startDate: StarteDate,
  }

  let userLocalStorage = localStorage.getItem('employee')
  if (userLocalStorage == null) {
    userLocalStorage = []
  } else {
    userLocalStorage = JSON.parse(userLocalStorage)
  }
  userLocalStorage.push(employee)
  localStorage.setItem('employee', JSON.stringify(userLocalStorage))

  return (
    <div>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <div className="inputGroupName">
          <Row className="justify-content-center">
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>First Name</Form.Label>
              <Form.Control
                required
                type="text"
                className="firstName"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control
                required
                type="text"
                className="lastName"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Date of Birth</Form.Label>
              <DatePicker className="dateOfBirth" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Start Date</Form.Label>
              <DatePicker className="startDate" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>
        </div>
        <div className="inputGroupAdress">
          <Row className="justify-content-center">
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Street</Form.Label>
              <Form.Control
                required
                type="text"
                className="street"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>City</Form.Label>
              <Form.Control
                required
                type="text"
                className="city"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label className="labelState">State</Form.Label>
              <Form.Select
                className="SelectState"
                aria-label="Default select example"
                // onChange={handleChange}
              >
                {cities.map((city, index) => (
                  <option className="stateUser" key={index}>
                    {city.name}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Zip Code</Form.Label>
              <Form.Control
                required
                type="text"
                className="zipCode"
                onChange={handleChange}
              />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label className="labelDepartment">Department</Form.Label>
              <Form.Select
                className="SelectDepartment"
                aria-label="Default select example"
                onChange={handleChange}
              >
                {departments.map((department, index) => (
                  <option className="departmentUser" key={index}>
                    {department}
                  </option>
                ))}
              </Form.Select>
            </Form.Group>
          </Row>
        </div>
        <Button type="submit" size="lg" onClick={() => setShow(true)}>
          Save
        </Button>
      </Form>
      <Modal show={show} onHide={() => setShow(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Success</Modal.Title>
        </Modal.Header>
        <Alert variant="success">
          <Modal.Body>Your employe is added to employee list</Modal.Body>
        </Alert>
      </Modal>
    </div>
  )
}
export default Home
