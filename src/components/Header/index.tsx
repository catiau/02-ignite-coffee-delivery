import coffeeLogo from '../../assets/logo-coffee-delivery.svg'

import locationIcon from '../../assets/location.svg'

import { HeaderContainer } from './styles'

import { ShoppingCart } from 'phosphor-react'

import { NavLink } from 'react-router-dom'

export function Header(){
    return (
        <HeaderContainer>
            <img src={coffeeLogo} alt="" />
            <nav>
                <NavLink to={'/'} title='location'>
                    <img src={locationIcon} alt="" />
                    Vitória da Conquista, BA
                </NavLink>
                <NavLink to={'/'} title='shopping-cart'>
                    <ShoppingCart size={24}/>
                </NavLink>
            </nav>
        </HeaderContainer>
    )
}