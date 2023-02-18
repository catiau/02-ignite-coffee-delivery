import styled from 'styled-components'
import { rgba } from 'polished'

import introBackground from '../../../../assets/intro-background.png'


export const BrandingCoffeeContainer = styled.section`
    background: ${({ theme }) => `url(${introBackground}) no-repeat center,
        linear-gradient(
            0deg,
            ${theme.colors['base-white']} 0%,
            ${rgba(theme.colors['base-background'], 0.2)} 50%,
            ${theme.colors['base-background']} 100%
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

    max-width: 37rem;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 4.2rem;

    .item {
        min-width: 17.5rem;

        display: flex;
        gap: 0.6rem;
        align-items: center;

        margin-top: 1rem;
    }

    .item div {
        width: 2rem;
        height: 2rem;
        border-radius: 999px;

        display: flex;
        align-items: center;
        justify-content: center;
    }

    span {
        color: ${(props) => props.theme.colors['gray-100']};
        font-size: 1rem;
        line-height: 1.3rem;
    }

    #item1 {
        background-color: ${(props) => props.theme.colors['yellow-dark']};
    }

    #item2 {
        background-color: ${(props) => props.theme.colors['gray-100']};
    }

    #item3 {
        background-color: ${(props) => props.theme.colors['yellow']};
    }

    #item4 {
        background-color: ${(props) => props.theme.colors['purple-dark']};
    }   

`

