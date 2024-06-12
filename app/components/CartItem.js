import React from 'react';
import { CartContext } from '../CartContext';
import { useContext } from 'react';
import { getItemData } from '../itemsList';
import { Button } from 'react-bootstrap';

export default function CartItem(props) {

   // Access the cart context
    const cart = useContext(CartContext);

    // Extract the id and quantity from props
    const id  = props.id;
    const quantity = props.quantity;

    // Get item data based on the id
    const itemData = getItemData(id);


  return (
    <>
        <h3>{itemData.title}</h3>
        <p>{quantity} total</p>
        <p>${ (quantity * itemData.price).toFixed(2)}</p>
        <Button size="m" onClick={() => cart.deleteFromCart(id)}>Remove</Button>
        <hr/>
    </>
  )
}
