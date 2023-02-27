import styled from "styled-components"

export const CoffeeCardCartContainer = styled.div`
    padding: 2.5rem;
    display: flex;
    justify-content: space-between;

    img {
        width: 4rem;
        height: 4rem;
    }

    .info {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1.2rem;
    }

    p {
        font-family: 'Roboto';
        font-weight: 700;
        font-size: 1rem;
        color: #574F4D;
    }

`

export const CoffeeTagCart = styled.div`
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1rem;
    color: #403937;

    padding-bottom: 0.5rem;

`

export const ActionsContainer = styled.div`
    display: flex;
    gap: 0.5rem;

`

export const RemoveButton = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.5rem;

    background: #E6E5E5;
    border-radius: 6px;
    border: 0;
    cursor: pointer;

`