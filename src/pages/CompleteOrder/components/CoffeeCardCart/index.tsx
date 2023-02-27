import { useCart } from "../../../../hooks/useCart"
import { CartItem } from "../../../../context/CartContext"
import {formatMoney } from "../../../../utils/formatMoney"

interface CoffeeCartCardProps {
    coffee: CartItem;
  }

export function CoffeeCardCart({ coffee }:CoffeeCartCardProps){
    const { changeCartItemQuantity, removeCartItem } = useCart()

    function handleIncrease() {
        changeCartItemQuantity(coffee.id, "increase");
      }
    
      function handleDecrease() {
        changeCartItemQuantity(coffee.id, "decrease");
      }
    
      function handleRemove() {
        removeCartItem(coffee.id);
      }

      const coffeeTotal = coffee.price * coffee.quantity

      const formatedPrice = formatMoney(coffeeTotal)
    

    return (
        
    )
}