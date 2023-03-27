import styled from 'styled-components'

export const CoffeeCardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2rem;

    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -4rem;
    }

    h4 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.6rem;
        color: #403937;
        padding-top: 1rem;
    }

    .coffeeInformation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1.4rem;
    }

    .coffeeInformation span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.85rem;
        line-height: 1.2rem;
        color: #8D8686;
        padding-top: 0.5rem;
        text-align: center;
    }

    @media screen and (max-width: 47rem) {
            display: flex;
            flex-direction: column;
            flex-wrap: wrap;
    }
`

export const CoffeeTag = styled.div`

        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        gap: 4px;

        p {
            color: ${(props) => props.theme.colors['yellow-dark']};
            background-color: ${(props) => props.theme.colors['yellow-light']};
            font-family: 'Roboto', sans-serif;
            font-weight: 700;
            font-size: 0.7rem;
            text-transform: uppercase;

            border-radius: 100px;
            padding: 0.25rem 0.5rem;
        }

`

export const CoffePriceInformations = styled.div `
    width: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    padding-inline: 1.5rem;
    gap: 1.5rem;

    .price {
        display: flex;
        gap: 0.3rem;
        align-items: center;
        justify-content: center;
    }

    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 14px;
        line-height: 1.2rem;
        color: #574F4D;
    }

    strong {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 22px;
        color: #574F4D;
    }
`

export const ShoppingCartContainer = styled.div`
    background: #4B2995;
    border-radius: 6px;
    padding: 0.5rem;
    cursor: pointer;

    &:hover {
        background: #8047F8;
    }
`
