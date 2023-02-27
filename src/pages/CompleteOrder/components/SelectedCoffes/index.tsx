import { SelectedCoffeesContainer, SelectedCoffeesContent } from "./styles";
import { useCart } from "../../../../hooks/useCart"
import { CoffeeCardCart } from "../CoffeeCardCart";

export function SelectedCoffees() {

    const {cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <h4>Cafés selecionados</h4>
            <SelectedCoffeesContent>
                {cartItems.map((item) => (
                    <CoffeeCardCart coffee={item}/>
                ))}
            </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
    )
}