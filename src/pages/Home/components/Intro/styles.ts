import styled from 'styled-components'
import { rgba } from 'polished'

import introBackground from '../../../../assets/intro-background.png'


export const BrandingCoffeeContainer = styled.section`
    background: ${({ theme }) => `url(${introBackground}) no-repeat center,
        linear-gradient(
            0deg,
            ${theme.colors["base-white"]} 100%,
            ${rgba(theme.colors["base-background"], 0.3)} 90%,
            ${theme.colors["base-background"]} 80%
    )`};
    height: 34rem;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const BrandingCoffeeContent = styled.div`
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

