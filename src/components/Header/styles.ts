import styled from 'styled-components'

export const HeaderContainer = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-top: 2rem;

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
        background-color: ${(props) => props.theme['purple-light']};
    }

    nav a[title='shopping-cart'] {
        background-color: ${(props) => props.theme['yellow-light']};
        color: ${(props) => props.theme['yellow-dark']};
    }
`
