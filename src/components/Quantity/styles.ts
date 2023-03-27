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
        text-align: right;
        background: none;
        border: none;
        width: 2rem;
        color: black;
        outline: none;
    }
`

export const IconControl = styled.button.attrs({
    type: "button",
})`
    border: none;
    cursor: pointer;
    background: none;
    transition: 0.4s;

    &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }


`