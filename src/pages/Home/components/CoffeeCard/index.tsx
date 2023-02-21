import { ShoppingCart } from 'phosphor-react';
import { useState } from 'react'
import { Quantity } from '../../../../components/Quantity';
import { CoffeeCardContentContainer, CoffeeTag, CoffePriceInformations, ShoppingCartContainer } from './styles'
import { formatMoney } from '../../../../utils/formatMoney';
import { useCart } from '../../../../hooks/useCart';
export interface Coffee {
    title: string;
    id: number,
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

     const { addCoffeeToCart } = useCart();

     function handleAddToCart(){
        const coffeeToAdd = {
            ...coffee, 
            quantity,
        }
        addCoffeeToCart(coffeeToAdd)
        console.log(coffeeToAdd)
     }

     const formattedPrice = formatMoney(coffee.price)

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
                <div className='price'>
                    <span>R$</span>
                    <strong>{formattedPrice}</strong>
                </div>
                <Quantity 
                        quantity={quantity}
                        onIncrease={handleIncreaseQuantity}
                        onDecrease={handleDecreaseQuantity}
                />
                <ShoppingCartContainer onClick={handleAddToCart}>
                    <ShoppingCart color='#FFFF' weight='fill'/>
                </ShoppingCartContainer>
            </CoffePriceInformations>
        </CoffeeCardContentContainer>
    )
}