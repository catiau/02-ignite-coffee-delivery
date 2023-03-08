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
  const { register, formState, setValue } = useFormContext();

  const { errors } = formState as unknown as ErrorsType;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setValue(name, value);
  };

  return (
    <AdressFormContainer>
      <Input
        placeholder="CEP"
        className="cep"
        {...register("cep")}
        error={errors.cep?.message}
        onChange={handleChange}
      />
      <Input
        placeholder="Rua"
        className="street"
        {...register("street")}
        error={errors.street?.message}
        onChange={handleChange}
      />
      <Input
        type="number"
        placeholder="Número"
        {...register("number")}
        error={errors.number?.message}
        onChange={handleChange}
      />
      <Input
        placeholder="Complemento"
        className="complement"
        {...register("complement")}
        rightText="Opcional"
        onChange={handleChange}
      />
      <Input
        placeholder="Bairro"
        {...register("district")}
        error={errors.district?.message}
        onChange={handleChange}
      />
      <Input
        placeholder="Cidade"
        {...register("city")}
        error={errors.city?.message}
        onChange={handleChange}
      />
      <Input
        placeholder="UF"
        {...register("uf")}
        error={errors.uf?.message}
        onChange={handleChange}
      />
    </AdressFormContainer>
  );
}