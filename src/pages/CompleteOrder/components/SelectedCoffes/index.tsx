import { SelectedCoffeesContainer, SelectedCoffeesContent } from "./styles";
import { useCart } from "../../../../hooks/useCart"
import { CoffeeCardCart } from "../CoffeeCardCart";
import { ConfirmationOrder } from "../ConfirmationOrder";

export function SelectedCoffees() {

    const { cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <h4>Cafés selecionados</h4>
            <SelectedCoffeesContent>
                {cartItems.map((item) => (
                    <CoffeeCardCart coffee={item}/>
                ))}
                <ConfirmationOrder />
            </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
    )
}