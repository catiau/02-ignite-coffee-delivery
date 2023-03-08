import { forwardRef, InputHTMLAttributes } from "react";
import { useController, UseControllerProps } from "react-hook-form";
import {
  InputWrapper,
  InputStyleContainer,
  InputStyled,
  RightText,
} from "./styles";

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  error?: string;
  rightText?: string;
} & UseControllerProps;

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ error, rightText, className, control, name, rules, ...props }, ref) => {
    const {
      field: { onChange, onBlur, value },
      fieldState: { invalid },
    } = useController({
      name,
      control,
      rules,
      defaultValue: "",
    });

    return (
      <InputWrapper className={className}>
        <InputStyleContainer hasError={invalid || !!error}>
          <InputStyled
            {...props}
            ref={ref}
            value={value}
            onChange={onChange}
            onBlur={onBlur}
            invalid={invalid}
            name={name}
          />
          {rightText && <RightText>{rightText}</RightText>}
        </InputStyleContainer>
        {(invalid || error) && <span>{error}</span>}
      </InputWrapper>
    );
  }
);