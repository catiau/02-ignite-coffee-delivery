import styled from 'styled-components'

export const CoffeeCardContentContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;


    img {
        width: 7.5rem;
        height: 7.5rem;
        margin-top: -6.5rem;
    }


    h4 {
        font-family: 'Baloo 2';
        font-weight: 700;
        font-size: 1.25rem;
        line-height: 1.6rem;
        color: #403937;
    }

    .coffeeInformation {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        padding: 0 1.4rem;
    }

    span {
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.9rem;
        line-height: 1.2rem;
    }


`

export const CoffeTag = styled.div`

    
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

            border-radius: 100px;

    
    
            padding: 0.25rem 0.5rem;
        }

`