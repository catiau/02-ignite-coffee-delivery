import styled from 'styled-components'

import coffeeBrandingBackground from '../../../../assets/coffee-branding-background.svg'

export const BrandingCoffeeContainer = styled.main`

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;
    

`

export const BrandingCoffeeContainerBackground = styled.main`
    background-image: url(${coffeeBrandingBackground});
    height: 34rem;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

`

export const BrandingCoffeeContainterText = styled.div`
    flex: 1;

    div {
        max-width: 36.75rem;
    }

    span {
        font-size: 20px
    }

`

export const AdvantagesCoffeeDeliveryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;
    flex-wrap: wrap;

    padding-top: 4.2rem;

    span {
        font-size:16px;
    }

`

export const ItemShoppingCart = styled.main`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        background-color: ${(props) => props.theme['yellow-dark']};
        padding: 0.5rem;
        border-radius: 999px;
    }

`

export const ItemPackage = styled.main`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        background-color: ${(props) => props.theme['gray-100']};
        padding: 0.5rem;
        border-radius: 999px;
    }
`

export const ItemTimer = styled.main`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        background-color: #DBAC2C;
        padding: 0.5rem;
        border-radius: 999px;
    }
`

export const ItemCoffee = styled.main`
    display: flex;
    gap: 0.75rem;
    align-items: center;
    justify-content: center;

    div {
        display: flex;
        background-color: ${(props) => props.theme['purple-dark']};
        padding: 0.5rem;
        border-radius: 999px;
    }

`