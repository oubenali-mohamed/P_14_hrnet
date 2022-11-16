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

function Home() {
  const [validated, setValidated] = useState(false)
  const [show, setShow] = useState(false)
  /* const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    dateOfBirth: '',
    startDate: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
    department: '',
  }) */

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
  }
  let userLocalStorage = localStorage.getItem('user')
  if (userLocalStorage == null) {
    userLocalStorage = []
  } else {
    userLocalStorage = JSON.parse(userLocalStorage)
  }
  // userLocalStorage.push(user)
  localStorage.setItem('user', JSON.stringify(userLocalStorage))

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
              <Form.Label>First name</Form.Label>
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
              <Form.Control required type="text" className="street" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" className="city" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label className="labelState">State</Form.Label>
              <Form.Select
                className="SelectState"
                aria-label="Default select example"
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
              <Form.Control required type="text" className="zipCode" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>
          <Row>
            <Form.Group>
              <Form.Label className="labelDepartment">Department</Form.Label>
              <Form.Select
                className="SelectDepartment"
                aria-label="Default select example"
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
