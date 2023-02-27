import { SelectedCoffeesContainer, SelectedCoffeesContent } from "./styles";
import { useCart } from "../../../../hooks/useCart"

export function SelectedCoffees() {

    const {cartItems } = useCart()

    return (
        <SelectedCoffeesContainer>
            <h4>Cafés selecionados</h4>
            <SelectedCoffeesContent>
                {cartItems.map((item) => (
                    <div>Olá</div>
                ))}
            </SelectedCoffeesContent>
        </SelectedCoffeesContainer>
    )
}