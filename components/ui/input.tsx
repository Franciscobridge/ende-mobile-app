import { Controller, UseControllerProps } from "react-hook-form";
import { Text, TextInput, TextInputProps, View } from 'react-native';

type InputProps = {
  formProps: UseControllerProps
  inputProps: TextInputProps,
  error: string
}

export function Input({ formProps, inputProps, error = "" }: InputProps) {
  return (
    <Controller render={({ field, }) => (
      <View>
        <TextInput
          className="bg-gray-100 rounded-md h-11 px-3"
          value={field.value}
          onChangeText={field.onChange}
          {...inputProps}
        />
        {error.length > 0 && <Text className="text-primary text-xs">{error}</Text>}
      </View>

    )}
      {...formProps}
    />
  )
}