import { AdressFormContainer } from "./styles";
import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/Input";

interface ErrorsType {
  errors: {
    [key: string]: {
      message: string;
    };
  };
}

export function AddressForm() {
  const { register, formState } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  return (
    <AdressFormContainer>
      <Input
        placeholder="CEP"
        type="number"
        className="cep"
        {...register('cep')}
        required
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register('street')}
        required
      />
      <Input
        type="number"
        placeholder="Número"
        {...register('number')}
        required
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register('complement')}
        rightText="Opcional"
      />
      <Input
        placeholder="Bairro"
        {...register('district')}
        required
      />
      <Input
        placeholder="Cidade"
        {...register('city')}
        required
      />
      <Input placeholder="UF" {...register("uf")} required />
    </AdressFormContainer>
  );
}