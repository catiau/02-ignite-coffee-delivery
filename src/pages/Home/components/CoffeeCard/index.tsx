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
        <div>
            <img src={coffee.image}/>
        </div>
    )
}