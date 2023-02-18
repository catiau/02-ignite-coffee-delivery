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
            <div className='coffeeImage'>
                <img src={`/available-coffee-list/${coffee.image}`}/>
            </div>
            <div>
                <p>{coffee.tags}</p>
                <h4>{coffee.title}</h4>
                <span>{coffee.description}</span>
            </div>
            <div>
                <div>
                    <span>R${coffee.price}</span>
                </div>
                <div>Count</div>
                <div>

                </div>
            </div>


        </CoffeeCardContentContainer>
    )
}