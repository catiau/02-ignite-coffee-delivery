import { 
    AdvantagesCoffeeDeliveryContainer, 
    BrandingCoffeeContainer, 
    BrandingCoffeeContainerBackground, 
    BrandingCoffeeContainterText, ItemCoffee, 
    ItemPackage, 
    ItemShoppingCart, 
    ItemTimer } 
from "./styles";

import brandingCoffee from '../../../../assets/coffee-branding.svg'
import { Coffee, Package, ShoppingCart, Timer } from "phosphor-react";


export function Intro() {
    return (
        <BrandingCoffeeContainerBackground>
            <BrandingCoffeeContainer>
                <BrandingCoffeeContainterText>
                    <div>
                        <h2>Encontre o café perfeito para qualquer hora do dia</h2>
                        <span>Com o Coffee Delivery você recebe seu café onde estiver, a qualquer hora.</span>
                    </div> 
                    <AdvantagesCoffeeDeliveryContainer>
                        <ItemShoppingCart>
                            <div>
                                <ShoppingCart weight="fill" size={24} color="white"/>
                            </div>
                            <span>
                                Compra simples e segura.
                            </span>
                        </ItemShoppingCart>
                        <ItemPackage>
                            <div>
                                <Package weight="fill" size={24} color="white"/>
                            </div>
                            <span>
                                Embalagem mantém o café intacto.
                            </span>
                        </ItemPackage>
                        <ItemTimer>
                            <div>
                                <Timer weight="fill" size={24} color="white"/>
                            </div>
                            <span>
                                Entrega rápida e rastreada.
                            </span>
                        </ItemTimer>
                        <ItemCoffee>
                            <div>
                                <Coffee weight="fill" size={24} color="white"/>
                            </div>
                            <span>
                                O café chega fresquinho até você.
                            </span>
                        </ItemCoffee>

                    </AdvantagesCoffeeDeliveryContainer>   
                </BrandingCoffeeContainterText>

                <img src={brandingCoffee} />
            </BrandingCoffeeContainer>    
        </BrandingCoffeeContainerBackground>

    )
}