import { CurrencyDollar, MapPinLine } from "phosphor-react";
import { AddressForm } from "../AdressForm/AdressForm";
import { PaymentMethodOptions } from "./PaymentMethoOptions";
import { AdressFormSection, AdressFormTitle, CompleteOrderFormContainer } from "./styles";

export function CompleteOrderForm(){
    return (
        <CompleteOrderFormContainer className="container">
            <h4>Complete o seu pedido</h4>

            <AdressFormSection>
                <AdressFormTitle>
                    <MapPinLine size={24} color="#C47F17"/>
                    <div>
                        <h5>Endereço de entrega</h5>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </AdressFormTitle>
                <AddressForm />
            </AdressFormSection>

            <AdressFormSection>
                <AdressFormTitle>
                    <CurrencyDollar size={24} color="#8047F8"/>
                    <div>
                        <h5>Pagamento</h5>
                        <span>O pagamento é feito na entrega. Escolha a forma que deseja pagar</span>
                    </div>
                </AdressFormTitle>
                
                <PaymentMethodOptions />
            </AdressFormSection>

        </CompleteOrderFormContainer>
    )
}