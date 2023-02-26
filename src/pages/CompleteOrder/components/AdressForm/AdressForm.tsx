import { useFormContext } from "react-hook-form"
import { AdressFormContainer } from "./styles"

export function AdressForm(){
    const { register, formState } = useFormContext()

    return (
        <AdressFormContainer>
            <input 
                type="number" 
                placeholder="CEP" 
                id="cep"
                {...register("cep")}
            />
            <input 
                type="string" 
                placeholder="Rua" 
                id="rua"
                {...register("rua")}
            />
            <input 
                type="number" 
                placeholder="Número" 
                id="numero"
                {...register("numero")}
            />
            <input 
                type="string" 
                placeholder="Complemento" 
                id="complemento"
                {...register("cep")}
            />
            <input 
                type="string" 
                placeholder="Bairro" 
                id="bairro"
                {...register("bairro")}
            />
            <input 
                type="string" 
                placeholder="Cidade" 
                id="cidade"
                {...register("cidade")}
            />
            <input 
                type="string" 
                placeholder="UF" 
                id="estado"
                {...register("estado")}
            />
        </AdressFormContainer>
    )
}