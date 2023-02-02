import { CoffeCardConteiner, OurCoffesContainer, ProductsListContainer } from "./styles";

import { coffees } from "../../../../data/coffees"
import { CoffeeCard } from "../CoffeeCard";

export function OurCoffes() {
    return (
            
        <OurCoffesContainer>
            <h3>Nossos cafés</h3>
            <ProductsListContainer>
                    {
                        coffees.map((coffee) => (
                            <CoffeCardConteiner>
                                <CoffeeCard coffee={coffee}/>
                            </CoffeCardConteiner>
                    ))}
            </ProductsListContainer>
        </OurCoffesContainer>
    )
}