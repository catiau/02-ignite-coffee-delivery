import { MapPinLine } from "phosphor-react";
import { AdressForm } from "../AdressForm/AdressForm";
import { AdressFormSection, AdressFormTitle, CompleteOrderForContainer } from "./styles";

export function CompleteOrderForm(){
    return (
        <CompleteOrderForContainer className="container">
            <h4>Complete o seu pedido</h4>

            <AdressFormSection>
                <AdressFormTitle>
                    <MapPinLine size={24} color="#C47F17"/>
                    <div>
                        <h5>Endereço de entrega</h5>
                        <span>Informe o endereço onde deseja receber seu pedido</span>
                    </div>
                </AdressFormTitle>
                <AdressForm />
            </AdressFormSection>
        </CompleteOrderForContainer>
    )
}