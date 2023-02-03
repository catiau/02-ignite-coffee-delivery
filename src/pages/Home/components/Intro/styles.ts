import styled from 'styled-components'

import coffeeBrandingBackground from '../../../../assets/coffee-branding-background.svg'


export const BrandingCoffeeContainer = styled.main`
    background-image: url(${coffeeBrandingBackground});
    height: 34rem;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BrandingCoffeeContent = styled.section`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 3.5rem;

    div {
        max-width: 37rem;
    }

    span {
        font-size: 20px;
    }


`

export const AdvantagesContainer = styled.div`


`

