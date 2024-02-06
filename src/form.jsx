import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import Row from 'react-bootstrap/Row';
import './App.css';

function FormExample() {
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    
     <Form noValidate validated={validated} onSubmit={handleSubmit} style={{cursor:"pointer"}} className='form'>
     <br/>
      <Row className="mb-3" style={{cursor:"pointer"}}>
        <Form.Group as={Col} md="10" className='d-flex' controlId="validationCustom01" style={{cursor:"pointer"}}>
          <Form.Label style={{marginRight:"10%",width:"30%"}}>F Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="First name"
            
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
        </Row>
        <br/>
        <Row className="mb-3" style={{cursor:"pointer"}}>
        <Form.Group as={Col} md="10" controlId="validationCustom02" className='d-flex' style={{cursor:"pointer"}}>
          <Form.Label style={{marginRight:"10%",width:"30%"}}>L Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Last name"
           
          />
          <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
        </Form.Group>
      
      </Row>
      <br/>
      <Row className="mb-3" style={{cursor:"pointer"}}>
     
        <Form.Group as={Col} md="10" controlId="validationCustom03" className='d-flex'style={{justifyContent:"space-around",cursor:"pointer"}}>
          <Form.Label style={{marginRight:"10%",width:"30%"}}>City</Form.Label>
          <Form.Control type="text" placeholder="City" required />
          <Form.Control.Feedback type="invalid">
            Please provide a valid city.
          </Form.Control.Feedback>
        </Form.Group>
       
       
      </Row>
      <br/>
      <Row className="mb-3" style={{cursor:"pointer"}}>

      <Form.Group as={Col} md="10" controlId="validationCustom04" className='d-flex' style={{cursor:"pointer"}}>
      <Form.Label style={{marginRight:"10%",width:"30%"}}>State</Form.Label>
      <Form.Control type="text" placeholder="State" required />
      <Form.Control.Feedback type="invalid">
        Please provide a valid state.
      </Form.Control.Feedback>
    </Form.Group>
    </Row>
    <br/>
      <Form.Group className="mb-3">
        <Form.Check
        style={{marginLeft:"5%",width:"50%"}}
          required
          label="Agree terms and conditions"
          feedback="You must agree before submitting."
          feedbackType="invalid"
        />
      </Form.Group>
      <Button type="submit">Submit form</Button>
    </Form>
  );
}

export default FormExample;