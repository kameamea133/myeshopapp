import React, { useContext } from 'react'
import { Card, Form, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';


function Product ({title, image, price, description, id}) {
  const cart = useContext(CartContext);
  const itemQuantity = cart.getItemQuantity(id);
  
  
  return (
      <Card id={id}>
        <Card.Body>
        <Image src={image} fluid/>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{price}</Card.Text>
          <Card.Text>{description}</Card.Text>
          {itemQuantity > 0 ? 
          <>
            <Form as={Row}>
            <Form.Label column="true" sm="6">In Cart: {itemQuantity}</Form.Label>
            <Col sm="6">
              <Button sm="6" className='mx-2' onClick={() => cart.addOneToCart(id)}>+</Button>
              <Button sm="6" className='mx-2' onClick={()=> cart.removeOneFromCart(id)}>-</Button>
            </Col>
            </Form>
            <Button variant='danger' className='my-2' onClick={() => cart.removeOneFromCart(id)}>Remove from Cart</Button>
          </>
          :
          <Button variant="primary" onClick={() => cart.addOneToCart(id)}>Add To Cart</Button>
          }
        </Card.Body>
      </Card>
  )
}

export default Product