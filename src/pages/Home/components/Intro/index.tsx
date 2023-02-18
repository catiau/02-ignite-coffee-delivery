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
                            <div className="item">
                                <div id="item1">
                                    <ShoppingCart weight="fill" color="#FFFF" />
                                </div>
                                <span>Compra simples e segura</span>
                            </div>
                            <div className="item">
                                <div id="item2">
                                    <Package weight="fill" color="#FFFF" />
                                </div>
                                <span>Embalagem mantém o café intacto</span>
                            </div>
                            <div className="item">
                                <div id="item3">
                                    <Timer weight="fill" color="#FFFF"/>
                                </div>
                                <span>Entrega rápida e rastreada</span>
                            </div>
                            <div className="item">
                                <div id="item4">
                                    <Coffee weight="fill" color="#FFFF"/>
                                </div>
                                <span>O café chega fresquinho até você</span>
                            </div>
                         
                        </AdvantagesContainer>
                    </div>
                    <img src={brandingCoffee} />
                </BrandingCoffeeContent>
            </BrandingCoffeeContainer>    
        

    )
}