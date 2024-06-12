import React, { useContext, useState } from 'react'
import { Form, Row, Col } from 'react-bootstrap'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import { CartContext } from '../CartContext';
import { useAuth } from '@clerk/nextjs';
import Modal from 'react-bootstrap/Modal';



function Product ({title, image, price, description, id}) {
  // Access the cart context
  const cart = useContext(CartContext);

    // Get the quantity of the item in the cart
  const itemQuantity = cart.getItemQuantity(id);

  // Get the authentication status
  const { isSignedIn } = useAuth();

  const [showModal, setShowModal] = useState(false);


 // Function to handle adding item to the cart
  const handleAddToCart = (id) => {
    if (isSignedIn) {
      cart.addOneToCart(id);
    } else {
      setShowModal(true);
    }
  };
  
  
  return (
    <div id={id} className="max-w-xs w-full h-full flex flex-col justify-between shadow-md rounded-lg overflow-hidden bg-white">
    <div className="h-48 w-full object-cover">
      <Image src={image} className="h-full w-full object-contain" alt={title} />
    </div>
    <div className="p-4 flex flex-col justify-between flex-grow">
      <div>
        <h2 className="text-lg font-bold">{title}</h2>
        <span className="text-lg font-semibold text-blue-600">{price}€</span>
        <p className="mt-2 text-gray-600">{description}</p>
      </div>
      <div>
        {itemQuantity > 0 ? (
          <>
            <Form as={Row} className="mt-4">
              <Form.Label column="true" sm="6">In Cart: {itemQuantity}</Form.Label>
              <Col sm="6" className="flex items-center">
                <Button sm="6" className="mx-2" onClick={() => cart.addOneToCart(id)}>+</Button>
                <Button sm="6" className="mx-2" onClick={() => cart.removeOneFromCart(id)}>-</Button>
              </Col>
            </Form>
            <Button variant="danger" className="my-2" onClick={() => cart.removeOneFromCart(id)}>Remove from Cart</Button>
          </>
        ) : (
          <>
            <Button variant="primary" className="mt-4" onClick={() => handleAddToCart(id)}>Add To Cart</Button>
            <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Vous devez vous connectez pour ajouter cet article</Modal.Title>
              </Modal.Header>
            </Modal>
          </>
        )}
      </div>
    </div>
  </div>
  )
}

export default Product