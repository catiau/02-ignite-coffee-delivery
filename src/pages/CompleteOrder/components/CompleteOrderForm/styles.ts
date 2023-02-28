import styled from 'styled-components'


export const CompleteOrderFormContainer = styled.div`
    
    padding-top: 2.5rem;

    width: 40rem;
    
    h4 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.2rem;
    }

`

export const AdressFormSection = styled.section`
    margin-top: 1rem;
    padding: 2.5rem;

    font-family: 'Roboto', sans-serif;

    display: flex;
    flex-direction: column;

    background-color: #F3F2F2;

    border-radius: 6px;


`

export const AdressFormTitle = styled.div`
    display: flex;
    gap: 0.75rem;

    h5 {
        font-size: 1.1rem;
        font-weight: 400;
        color: #403937;
    }

    span {
        font-weight: 400;
        font-size: 1rem;
        color: #574F4D;
    }

`

export const PaymentMethodOptionsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;
  
  
  > p {
    grid-column: span 3;
    color: ${({ theme }) => theme.colors["base-error"]};
  }
`;