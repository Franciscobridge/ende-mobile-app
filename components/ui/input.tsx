import { Controller, UseControllerProps } from "react-hook-form";
import { TextInput, TextInputProps } from 'react-native';

type InputProps = {
  formProps: UseControllerProps
  inputProps: TextInputProps
}

export function Input({ formProps, inputProps }: InputProps) {
  return (
    <Controller render={({ field }) => (
      <TextInput
        className="bg-gray-100 rounded-md h-11 px-3"
        value={field.value}
        onChangeText={field.onChange}
        {...inputProps}
      />

    )}
      {...formProps}
    />
  )
}