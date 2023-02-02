import { CoffeeCardContentContainer } from './styles'

export interface Coffee {
    title: string;
    description: string;
    price: number;
    tags: string[];
    image: string;
}

interface CoffeeProps {
    coffee: Coffee
}


export function CoffeeCard({ coffee }: CoffeeProps){
    return (
        <CoffeeCardContentContainer>
            <div>
                <img src={`/available-coffee-list/${coffee.image}`}/>
            </div>     
        </CoffeeCardContentContainer>
    )
}