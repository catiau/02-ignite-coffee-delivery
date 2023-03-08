import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";

interface LocationType {
    state: OrderData;
  }

export function OrderConfirmed(){

    const { state } = useLocation() as unknown as LocationType;

    return (
        <div>
            <span>{state.cep}</span>
        </div>
    )
}