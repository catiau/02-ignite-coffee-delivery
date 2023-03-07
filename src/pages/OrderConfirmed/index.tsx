import { useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { OrderData } from "../CompleteOrder";

interface LocationType {
    state: OrderData;
  }

export function OrderConfirmed(){
    return (
        <div>
            <span>Olá</span>
        </div>
    )
}