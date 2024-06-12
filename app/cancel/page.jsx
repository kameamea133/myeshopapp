import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const CancelPage = () => {
  return (
    <div  className='mt-[200px]'>
        <Container fluid>
        <Row>
        <Col>
        <h1>Sorry to see you cancelled your Stripe payment!</h1>
        </Col>
      </Row>
        </Container>
    </div>
  )
}

export default CancelPage;