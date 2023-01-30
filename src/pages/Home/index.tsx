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
                            <div>
                                <ShoppingCart size={24}/>
                                <span>Compra simples e segura</span>
                            </div>
                            <div>
                                <Timer size={24}/>
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div>
                                <Package size={24}/>
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div>
                                <Coffee size={24}/>
                                <span>O café chega fresquinho até você</span>
                            </div>
                    </AdvantagesCoffeeDeliveryContainer>   
                </BrandingCoffeeContainterText>

                <img src={brandingCoffee} />
            </BrandingCoffeeContainer>    
        </BrandingCoffeeContainerBackground>
    )
}