import { ProductsListContainer } from "./styles";

import { products } from "../../../../data/products"

export function OurCoffes() {
    return (
            
        <ProductsListContainer>
            <h3>Nossos cafés</h3>
            {products.map((product) => (
                <div></div>
            ))}
        </ProductsListContainer>
    )
}