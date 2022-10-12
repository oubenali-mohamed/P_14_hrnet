import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'
// import InputGroup from 'react-bootstrap/InputGroup'
import Row from 'react-bootstrap/Row'
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
      <div>
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Row className="justify-content-center">
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>First name</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>Last name</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>Date of Birth</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>Start Date</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>Street</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>City</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Row className="justify-content-center">
            <Form.Select className="Select" aria-label="Default select example">
              <option>State</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
            <Form.Group
              className="oneInput"
              as={Col}
              md="3"
              controlId="validationCustom01"
            >
              <Form.Label>Zip Code</Form.Label>
              <Form.Control required type="text" />
              <Form.Control.Feedback>Valid</Form.Control.Feedback>
            </Form.Group>
            <Form.Select className="Select" aria-label="Default select example">
              <option>Department</option>
              <option value="1">One</option>
              <option value="2">Two</option>
              <option value="3">Three</option>
            </Form.Select>
          </Row>
          <Button type="submit" size="lg">
            Save
          </Button>
        </Form>
      </div>
    </div>
  )
}
export default Home
