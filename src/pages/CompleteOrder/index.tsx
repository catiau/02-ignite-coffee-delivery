import { useForm, FormProvider } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as zod from "zod"
import { CompleteOrderForm } from "./components/CompleteOrderForm"
import { CompleteOrderContainer } from "./styles"
import { SelectedCoffees } from "./components/SelectedCoffes"
import { useNavigate } from "react-router-dom"
import { useCart } from "../../hooks/useCart"


enum PaymentMethods {
    credit = "credit",
    debit = "debit",
    money = "money",
  }

  const confirmOrderFormValidationSchema = zod.object({
    cep: zod.string().min(1, "Informe o CEP"),
    street: zod.string().min(1, "Informe o Rua"),
    number: zod.string().min(1, "Informe o Número"),
    complement: zod.string(),
    district: zod.string().min(1, "Informe o Bairro"),
    city: zod.string().min(1, "Informe a Cidade"),
    uf: zod.string().min(1, "Informe a UF"),
    paymentMethod: zod.nativeEnum(PaymentMethods, {
      errorMap: () => {
        return { message: "Informe o método de pagamento" };
      },
    }),
  });

export type OrderData  = zod.infer<typeof confirmOrderFormValidationSchema>

type ConfirmOrderFormData = OrderData 

export function CompleteOrder(){
    const confirmOrderForm = useForm<ConfirmOrderFormData>({
        resolver: zodResolver(confirmOrderFormValidationSchema),
        defaultValues: {
            paymentMethod: undefined,
          },
    })

    const { handleSubmit } = confirmOrderForm;

    const { cleanCart } = useCart()

    const navigate = useNavigate()

    function handleConfirmOrder(data:ConfirmOrderFormData ) {
        navigate("/order-confirmed", {
            state: data,
        })
        cleanCart()
        console.log("testando")
    }

    return (
        <FormProvider {...confirmOrderForm}>
            <CompleteOrderContainer 
                className="container"
                onSubmit={handleSubmit(handleConfirmOrder)}
            >
                <CompleteOrderForm />
                <SelectedCoffees />
            </CompleteOrderContainer>
        </FormProvider>

    )
}