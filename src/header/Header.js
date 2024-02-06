
import React from 'react';
import { Col, Row,Container } from 'react-bootstrap';
import './style.scss'

const Header = () => {
  return (
    
     <Container>
     <div className="header-wrapper">
     <Row>
     <Col className='col-3'>Hay I am Col-3</Col>
     <Col className='col-2'>Hay I am Col-2</Col>
     <Col className='col-1'>Hay I am Col-1</Col>
     </Row>
     <h1>My App</h1>
    </div>
     </Container>
      
  );
};

export default Header;
