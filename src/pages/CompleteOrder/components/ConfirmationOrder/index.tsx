import { Button } from "../../../../components/Button";
import { formatMoney } from "../../../../utils/formatMoney"
import { useCart } from "../../../../hooks/useCart"
import { ConfirmationOrderContainer } from "./styles";


const taxDelivery = 3.5;

export function ConfirmationOrder(){
    const { cartItemsTotalValue, cartQuantity } = useCart();
    const orderTotalValue = taxDelivery + cartItemsTotalValue


    const formattedDeliveryPrice = formatMoney(taxDelivery);
    const formattedItemsTotal = formatMoney(cartItemsTotalValue);
    const formattedCartTotal = formatMoney(orderTotalValue);

    return (
        <ConfirmationOrderContainer>
            <div>
                <p>Total de itens</p>
                <p>{formattedItemsTotal}</p>
            </div>
            <div>
                <p>Entrega</p>
                <p>{formattedDeliveryPrice}</p>
            </div>
            <div>
                <strong>Total</strong>
                <strong>{formattedCartTotal}</strong>
            </div>
            <Button text="Confirmar pedido" type="submit"/>
        </ConfirmationOrderContainer>
    )
}