import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { CompleteOrderForm } from "./components/CompleteOrderForm"

enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
  }

const confirmOrderValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe a rua"),
    number: zod.number().min(1, "Informe o número"),
    complement: zod.string(),
    neighbourhood: zod.string().min(1, "Informe o bairro"),
    city: zod.string().min(1, "Informe a cidade"),
    state: zod.string().min(1, "Informe o estado"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
        errorMap: () => {
            return {
                message: "Informe o método de pagamento"
            }
        }, 
    }),
})

type ConfirmOrderedData = zod.infer<typeof confirmOrderValidationSchema>

export function CompleteOrder(){
    const confirmOrderForm = useForm({
        resolver: zodResolver(confirmOrderValidationSchema)
    })

    const { handleSubmit } = confirmOrderForm;

    function handleConfirmOrder(data: ConfirmOrderedData) {

    }

    return (
        <FormProvider {...confirmOrderForm}>
            {/* <CompleteOrderContainer 
                onSubmit={handleSubmit(handleConfirmOrder)}
            /> */}
            <CompleteOrderForm/>

        </FormProvider>

    )
}