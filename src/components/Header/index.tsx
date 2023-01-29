import coffeeLogo from '../../assets/logo-coffee-delivery.svg'

import { HeaderContainer } from './styles'

import { MapPin, ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header(){
    return (
        <HeaderContainer>
            <img src={coffeeLogo} alt="" />
            <nav>
                <NavLink to={'/'} title='location'>
                    <MapPin size={24} />
                    Vitória da Conquista, BA
                </NavLink>
                <NavLink to={'/'} title='shopping-cart'>
                    <ShoppingCart size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}