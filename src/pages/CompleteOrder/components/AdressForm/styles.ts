import styled from 'styled-components'

export const AdressFormContainer = styled.div`
    margin-top: 2rem;

    width: 100%;

    display: grid;
    grid-template-columns: 12.5rem 17.25rem 3.75rem;
    column-gap: 0.75rem;
    row-gap: 1rem;
    grid-auto-flow: dense;
    
    #cep {
        grid-column: span 3;
        max-width: 12.5rem;
    }

    #rua {
        grid-column: span 3;
    }

    #complemento {
        grid-column: span 2;
    }

    input {
        padding: 0.75rem;

        font-family: 'Roboto', sans-serif;

        background: #EDEDED;
        border: 1px solid #E6E5E5;
        border-radius: 4px;
        outline: 0;

    }


`