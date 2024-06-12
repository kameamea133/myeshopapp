'use client'
import { createContext, useState } from "react";
import { itemsList, getItemData } from "./itemsList";

export const CartContext = createContext({
    items: [],
    getItemQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    clearCart: () => {},
    getTotalcost: () => {}

});

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);


     // Function to get the quantity of a specific item in the cart
    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item.id === id)?.quantity

        if(quantity === undefined) {
            return 0;
        }

        return quantity;
    }


    // Function to add one item to the cart
    function addOneToCart(id) {
        const quantity = getItemQuantity(id);

        if(quantity === 0) { // product is not in cart
            setCartItems(
                [
                    ...cartItems,
                    {
                        id: id,
                        quantity: 1
                    }
                ]
            )
        }else { // product is in cart
            setCartItems(

                cartItems.map(
                    item => item.id === id ? {...item, quantity: item.quantity + 1}
                    : item 
                )
            )
        }
    }


    // Function to remove one item from the cart
    function removeOneFromCart(id) {
        const quantity = getItemQuantity(id);

        if(quantity == 1) {
            deleteFromCart(id);
        }else {
            setCartItems(

                cartItems.map(
                    item => item.id === id ? {...item, quantity: item.quantity - 1}
                    : item 
                )
            )
        }
    }


    // Function to delete an item from the cart
     function deleteFromCart(id) {
        setCartItems(
            cartItems => cartItems.filter(currentItem => {
                return currentItem.id != id;
            })
        )
     } 
     

     // Function to clear all items from the cart
     function clearCart() {
        setCartItems([]); 
    }


    // Function to calculate the total cost of the items in the cart
     function getTotalcost() {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            const itemData = getItemData(cartItem.id);
            totalCost += (itemData.price * cartItem.quantity);
        })
        return totalCost;
     }


     // Value to be provided by the CartContext
    const contextValue = {
        items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    clearCart,
    getTotalcost

    }
    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;