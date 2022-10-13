import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
import { Row } from 'react-bootstrap'
import '../utils/styles.css'

function Home() {
  const [validated, setValidated] = useState(false)

  const handleSubmit = (event) => {
    const form = event.currentTarget
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation()
    }

    setValidated(true)
  }
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
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control required type="date" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Start Date</Form.Label>
              <Form.Control required type="date" />
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
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="2" controlId="validationCustom01">
              <Form.Label className="labelState">State</Form.Label>
              <Form.Select
                className="SelectState"
                aria-label="Default select example"
              >
                <option>State</option>
              </Form.Select>
            </Form.Group>

            <Form.Group
              className="oneInput"
              as={Col}
              md="2"
              controlId="validationCustom01"
            >
              <Form.Label>Zip Code</Form.Label>
              <Form.Control required type="text" />
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
                <option>Sales</option>
                <option value="1">Marketing</option>
                <option value="2">Engineering</option>
                <option value="3">Human Resources</option>
                <option value="4">Legal</option>
              </Form.Select>
            </Form.Group>
          </Row>
        </div>
        <Button type="submit" size="lg">
          Save
        </Button>
      </Form>
    </div>
  )
}
export default Home
