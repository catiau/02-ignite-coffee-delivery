import styled from 'styled-components'
import { rgba } from 'polished'

import coffeeBrandingBackground from '../../../../assets/coffee-branding-background.svg'


export const BrandingCoffeeContainer = styled.main`
    background: ${({ theme }) => `url(${coffeeBrandingBackground}),
        linear-gradient(
            0deg,
            ${theme.colors["base-white"]} 0%,
            ${rgba(theme.colors["base-background"], 0.2)} 50%,
            ${theme.colors["base-background"]} 100%
    )`};
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

