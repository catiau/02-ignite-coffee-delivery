import { Minus, Plus } from "phosphor-react";
import { IconControl, QuantityContainer } from "./styles";

interface QuantityProps {
    quantity: number;
    onIncrease: () => void;
    onDecrease: () => void;
  }

export function Quantity({ onIncrease, onDecrease, quantity} : QuantityProps){
    return (
        <QuantityContainer>
            <IconControl onClick={onDecrease} disabled={quantity <= 1}>
                <Minus weight="fill" color="#8047F8"/>
            </IconControl>
            <input type="number" readOnly value={quantity} />
            <IconControl onClick={onIncrease}>
                <Plus weight="fill" color="#8047F8"/>
            </IconControl>
        </QuantityContainer>
    )
}