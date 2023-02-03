import {  
    AdvantagesContainer,
    BrandingCoffeeContainer, BrandingCoffeeContent, 
    } 
from "./styles";

import brandingCoffee from '../../../../assets/coffee-branding.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export function Intro() {
    return (
        
            <BrandingCoffeeContainer>
                <BrandingCoffeeContent className="container">
                    <div>
                            
                        <section>
                            <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                            <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</span>
                        </section>
                    

                        <AdvantagesContainer>
                            
                         
                        </AdvantagesContainer>
                    </div>
                    <img src={brandingCoffee} />
                </BrandingCoffeeContent>
            </BrandingCoffeeContainer>    
        

    )
}