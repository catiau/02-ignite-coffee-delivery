import { useCart } from "../../../../hooks/useCart"
import { CartItem } from "../../../../context/CartContext"
import {formatMoney } from "../../../../utils/formatMoney"
import { ActionsContainer, CoffeeCardCartContainer, CoffeeTagCart, RemoveButton } from "./styles";
import { Quantity } from "../../../../components/Quantity";
import { Trash } from "phosphor-react";

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
        <CoffeeCardCartContainer>
            <div className="info">
                <img src={`/available-coffee-list/${coffee.image}`} />
                <div>
                    <CoffeeTagCart>
                        {coffee.title}
                    </CoffeeTagCart>

                    <ActionsContainer>
                        <Quantity
                            quantity={coffee.quantity}
                            onDecrease={handleDecrease}
                            onIncrease={handleIncrease}
                        />
                        <RemoveButton type="button" onClick={handleRemove}>
                            <Trash size={16} color="#8047F8"/>
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$ {formatedPrice}</p>
        </CoffeeCardCartContainer>
    )
}