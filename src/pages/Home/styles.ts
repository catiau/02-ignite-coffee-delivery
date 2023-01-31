import styled from 'styled-components'
import coffeeBrandingBackground from '../../assets/coffee-branding-background.svg'

export const BrandingCoffeeContainer = styled.main`

    display: flex;
    align-items: center;
    justify-content: center;
    margin: 8rem 10rem;
    gap: 3.5rem;
    

    flex: 1;
`

export const BrandingCoffeeContainerBackground = styled.main`
    background-image: url(${coffeeBrandingBackground});
    height: 34rem;
    min-width: 90rem;

`

export const BrandingCoffeeContainterText = styled.div`
    flex: 1;

    div {
        max-width: 36.75rem;
    }
`

export const AdvantagesCoffeeDeliveryContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 2.5rem;

`
