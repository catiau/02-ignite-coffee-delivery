import styled from "styled-components"

export const ConfirmedOrderContainer = styled.div`

    padding-top: 5rem;

    h2 {
        color: #C47F17;
        padding-bottom: 0.25rem;
    }

    span {
        font-size: 20px;
    }

    @media screen and (max-width: 47rem) {

        padding-inline: 1rem;

        h2 {
            font-size: 2rem;
        }

        span {
            font-size: 1.2rem;
        }
  }

`

export const DetailsOrderContainer = styled.div`

    padding-top: 3rem;

    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 6rem;

    width: 100%;

    @media screen and (max-width: 47rem) {
        flex-direction: column;
        
    }


`

export const DetailsOrderContent = styled.div`

    width: 100%;

    padding: 2.5rem;

    display: flex;
    flex-direction: column;
    gap: 2rem;

    border-radius: 6px 36px 6px 36px;
    position: relative;
    background: ${({ theme }) => theme.colors["base-background"]};

    &::before {
    content: "";
    position: absolute;
    inset: -1px;
    z-index: -1;
    border-radius: 7px 37px 7px 37px;
    background: linear-gradient(102.89deg, #dbac2c 2.61%, #8047f8 98.76%);


    @media screen and (max-width: 47rem) {
        
        
    }


  }
  
    
`

export const ItemDetails = styled.div`


    display: flex;

    gap: 1rem;
    font-size: 1rem;

    min-width: 18rem;

    p {
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 1rem;
        color: #574F4D;
    }

    .Icon {
        width: 2rem;
        height: 2rem;

        display: flex;
        align-items: center;
        justify-content: center;

        border-radius: 999px;
    }

    #map {
        background-color: #8047F8;
    }

    #timer {
        background-color: #DBAC2C;
    }

    #money {
        background-color: #C47F17;
    }
`