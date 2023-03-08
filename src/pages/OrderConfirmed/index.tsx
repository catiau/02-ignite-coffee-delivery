import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";
import { ConfirmedOrderContainer, DetailsOrderContainer, DetailsOrderContent, ItemDetails } from "./styles";

import deliveryBrand from "../../assets/delivery.svg"
import { CurrencyDollarSimple, MapPin, Money, Timer } from "phosphor-react";

interface LocationType {
    state: OrderData;
  }

export function OrderConfirmed(){

    const { state } = useLocation() as unknown as LocationType;

    return (
        <ConfirmedOrderContainer className="container">
            <h2>Uhu! Pedido confirmado</h2>
            <span>Agora é só aguardar que logo o café chegará até você</span>

            <DetailsOrderContainer>
                <DetailsOrderContent>
                    <ItemDetails>
                        <div className="Icon" id="map">
                            <MapPin weight="fill" color="#FFFF"/>
                        </div>
                        <div>
                            <p>Entrega em {state.street}, {state.number}</p>
                            <p>{state.city}, {state.uf}</p>
                        </div>
                    </ItemDetails>
                    <ItemDetails>
                        <div className="Icon" id="timer">
                            <Timer weight="fill" color="#FFFF"/>
                        </div>
                        <div>
                            <p>Previsão de entrega</p>
                            <p>20 min - 30 min</p>
                        </div>
                    </ItemDetails>
                    <ItemDetails>
                        <div className="Icon" id="money">
                            <CurrencyDollarSimple weight="fill" color="#FFFF"/>
                        </div>
                        <div>
                            <p>Pagamento na entrega</p>
                            <p>{}</p>
                        </div>
                    </ItemDetails>
                    
                </DetailsOrderContent>
                <img src={deliveryBrand} alt="" />
            </DetailsOrderContainer>
        </ConfirmedOrderContainer>
    )
}