import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { ConfirmedOrderContainer } from "./styles";

interface LocationType {
    state: OrderData;
  }

export function OrderConfirmed(){

    const { state } = useLocation() as unknown as LocationType;

    return (
        <ConfirmedOrderContainer className="container">
            <h2>Uhu! Pedido confirmado</h2>
            <span>Agora é só aguardar que logo o café chegará até você</span>
        </ConfirmedOrderContainer>
    )
}