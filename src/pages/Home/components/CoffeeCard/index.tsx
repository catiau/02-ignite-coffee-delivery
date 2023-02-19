import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react'
import { Quantity } from '../../../../components/Quantity';
import { CoffeeCardContentContainer, CoffeeTag, CoffePriceInformations, ShoppingCartContainer } from './styles'

export interface Coffee {
    title: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
}

interface CoffeeProps {
    coffee: Coffee
}


export function CoffeeCard({ coffee }: CoffeeProps){
     const [quantity, setQuantity] = useState(1)

     function handleIncreaseQuantity(){
        setQuantity((prev) => prev + 1) 
     }

     function handleDecreaseQuantity(){
        setQuantity((prev) => prev - 1)
     }

    return (
        <CoffeeCardContentContainer>
            <img src={`/available-coffee-list/${coffee.image}`}/>
            
            <div className='coffeeInformation'>
                <CoffeeTag>
                    {coffee.tags.map((tag) => (
                        <p>{tag}</p>
                    ))}
                    
                </CoffeeTag>
                <h4>{coffee.title}</h4>
                <span>{coffee.description}</span>
            </div>
            <CoffePriceInformations>
                <div>
                    <span>R${coffee.price}</span>
                </div>
                <div>
                    <Quantity 
                        quantity={quantity}
                        onIncrease={handleIncreaseQuantity}
                        onDecrease={handleDecreaseQuantity}
                    />
                    <ShoppingCartContainer>
                            <ShoppingCart weight='fill' color='#fff' />
                    </ShoppingCartContainer>
                </div>
            </CoffePriceInformations>
        </CoffeeCardContentContainer>
    )
}