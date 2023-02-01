import { ProductsListContainer } from "./styles";

import { coffees } from "../../../../data/coffees"
import { CoffeeCard } from "../CoffeeCard";

export function OurCoffes() {
    return (
            
        <ProductsListContainer>
            <h3>Nossos cafés</h3>
            {coffees.map((coffee) => (
                <CoffeeCard coffee={coffee}/>
            ))}
        </ProductsListContainer>
    )
}