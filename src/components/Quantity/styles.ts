import styled from 'styled-components'

export const QuantityContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;


    background: #E6E5E5;
    border-radius: 6px;
    padding: 0.75rem 0.5rem;

    input {
        background: none;
        border: none;
        width: 2.1rem;
        color: black;
        outline: none;
        
        text-align: right;
        
    }


`

export const IconControl = styled.button.attrs({
    type: 'button',
})`
    border: none;
    background: none;
    transition: 0.4s;

`