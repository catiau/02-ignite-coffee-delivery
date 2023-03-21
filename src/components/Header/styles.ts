import styled from 'styled-components'

export const HeaderContainer = styled.header`

    padding-top: 2rem;
    padding-bottom: 2rem;
    background-color: ${(props) => props.theme.colors['base-background']};

    position: sticky;
    top: 0;
    left: 0;
    z-index: 1;

    div {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }


    nav {
        display: flex;
        gap: 0.75rem;
    }

    nav a, nav div {
        display: flex;
        align-items: center;
        text-decoration: none;
        gap: 0.3rem;
        padding: 0.5rem;
        border-radius: 8px;
        position: relative;
        font-family: 'Roboto', sans-serif;
        color: #4B2995;
    }

    nav div {
        background-color: ${(props) => props.theme.colors['purple-light']};
    }

    nav a[title='shopping-cart'] {
        background-color: ${(props) => props.theme.colors['yellow-light']};
        color: ${(props) => props.theme.colors['yellow-dark']};
    }


    span {
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0.5rem;
        font-size: 12px;
    
        position: absolute;
        height: 1.25rem;
        top: calc(-1.25rem / 2);
        right: calc(-1.25rem / 2);
        color: #FFFF;

        background-color: ${(props) => props.theme.colors['yellow-dark']};
        border-radius: 999px;
    }

    @media screen and (max-width: 47rem) {
        padding-inline: 1rem;
    }
        
`
