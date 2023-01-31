import { AdvantagesCoffeeDeliveryContainer, BrandingCoffeeContainer, BrandingCoffeeContainerBackground, BrandingCoffeeContainterText } from "./styles";

import brandingCoffee from '../../assets/coffee-branding.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";

export function Home() {
    return (
        <BrandingCoffeeContainerBackground>
            <BrandingCoffeeContainer>
                <BrandingCoffeeContainterText>
                    <div>
                        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</span>
                    </div> 
                    <AdvantagesCoffeeDeliveryContainer>
                        
                            <ShoppingCart size={24}/>
                        
                            <Package size={24}/>
                        
                         
                       
                            <Timer size={24}/>
                      
                        
                       
                            <Coffee size={24}/>
                        
                        
                    </AdvantagesCoffeeDeliveryContainer>   
                </BrandingCoffeeContainterText>

                <img src={brandingCoffee} />
            </BrandingCoffeeContainer>    
        </BrandingCoffeeContainerBackground>
    )
}