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

    nav a {
        display: flex;
        align-items: center;
        text-decoration: none;
        padding: 0.5rem;
        border-radius: 8px;
    }

    nav a[title='location'] {
        background-color: ${(props) => props.theme.colors['purple-light']};
    }

    nav a[title='shopping-cart'] {
        background-color: ${(props) => props.theme.colors['yellow-light']};
        color: ${(props) => props.theme.colors['yellow-dark']};
    }
`
