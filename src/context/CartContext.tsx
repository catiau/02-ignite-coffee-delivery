import { createContext, ReactNode, useState } from "react"
import { Coffee } from "../pages/Home/components/CoffeeCard"
import { produce } from 'immer'

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextProps {
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotalValue: number;
    addCoffeeToCart: (coffee: CartItem) => void;
}

export const CartContext = createContext({} as CartContextProps);

interface CartContextProviderProps {
  children: ReactNode;
}

export function CartContextProvider({ children }: CartContextProviderProps){
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.length
    const cartItemsTotalValue = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem){
        const coffeeAlreadyExistsInCart = cartItems.findIndex(
            (cartItem) => cartItem.id === coffee.id
          );
      
          const newCart = produce(cartItems, (draft) => {
            if (coffeeAlreadyExistsInCart < 0) {
              draft.push(coffee);
            } else {
              draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity;
            }
          });
      
          setCartItems(newCart);
    }

    return (
      <CartContext.Provider
        value={{
           cartItems,
           cartItemsTotalValue,
           cartQuantity,
           addCoffeeToCart,
        }}
      >
        {children}
      </CartContext.Provider>
    )

}