import coffeeLogo from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

import { useCart } from '../../hooks/useCart'

export function Header(){

    const { cartQuantity } = useCart()
    return (
        <HeaderContainer>
            <div className="container">
                <NavLink to={'/'}>
                    <img src={coffeeLogo} alt="" />
                </NavLink>
                <nav>
                    <div>
                        <MapPin size={24} color='#8047F8' weight='fill'/>
                        Vitória da Conquista, BA
                    </div>
                        
                    
                    <NavLink to={'/complete-order'} title='shopping-cart'>
                        {cartQuantity >= 1 && <span>{cartQuantity}</span>}
                        <ShoppingCart weight="fill" size={24}/>
                    </NavLink>
                </nav>
            </div>
        </HeaderContainer>
    )
}