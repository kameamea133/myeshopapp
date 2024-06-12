'use client'
import { createContext, useState } from "react";
import { itemsList, getItemData } from "./itemsList";

export const CartContext = createContext({
    items: [],
    getItemQuantity: () => {},
    addOneToCart: () => {},
    removeOneFromCart: () => {},
    deleteFromCart: () => {},
    getTotalcost: () => {}

});

export function CartProvider({children}) {
    const [cartItems, setCartItems] = useState([]);

    function getItemQuantity(id) {
        const quantity = cartItems.find(item => item.id === id)?.quantity

        if(quantity === undefined) {
            return 0;
        }

        return quantity;
    }

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

     function deleteFromCart(id) {
        setCartItems(
            cartItems => cartItems.filter(currentItem => {
                return currentItem.id != id;
            })
        )
     } 
     
     
     function getTotalcost() {
        let totalCost = 0;
        cartItems.map((cartItem) => {
            const itemData = getItemData(cartItem.id);
            totalCost += (itemData.price * cartItem.quantity);
        })
        return totalCost;
     }

    const contextValue = {
        items: cartItems,
    getItemQuantity,
    addOneToCart,
    removeOneFromCart,
    deleteFromCart,
    getTotalcost

    }
    return (
    <CartContext.Provider value={contextValue}>
        {children}
    </CartContext.Provider>
    )
}

export default CartProvider;