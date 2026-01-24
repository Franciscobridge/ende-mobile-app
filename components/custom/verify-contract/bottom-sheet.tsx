import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Feather } from '@expo/vector-icons'
import { Link } from 'expo-router'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Keyboard, KeyboardAvoidingView, Platform, Text, TouchableWithoutFeedback, View } from 'react-native'
import { CustomBottomSheetWithRef } from '../bottom-sheet'

type BottomSheetVerifyContractProps = {
  bottomSheetModalRef: any
  handleCloseBottomSheet: () => void
  handleVerify: (data: any) => void
}


export function BottomSheetVerifyContract({ bottomSheetModalRef, handleVerify, handleCloseBottomSheet }: BottomSheetVerifyContractProps) {


  const [numberContract, setNumberContract] = useState("")
  const isDisabled = numberContract.trim() === ""

  const { control, handleSubmit, formState: { errors } } = useForm()

  return (
    <View>
      <CustomBottomSheetWithRef
        bottomSheetModalRef={bottomSheetModalRef}
        // modalHeaderProps={{ component: () => <View style={{ backgroundColor: "red" }}><  Text>AAAAA</></View> }}
        renderContent={() =>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : undefined}>
              <View
                style={{
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  paddingVertical: 24,
                  paddingHorizontal: 18,
                  gap: 24,
                }}
              >
                <View className="flex-row items-center gap-3">
                  <View className="bg-primary p-2.5 rounded-lg">
                    <Feather name="file-text" size={25} color="#fff" />
                  </View>
                  <View className="flex-1">
                    <Text className="text-xl font-bold">Verificar Contrato</Text>
                    <Text className="text-gray-600 -mt-1">
                      Insira o número do seu contrato ENDE.
                    </Text>
                  </View>
                </View>

                <View className="gap-4">
                  <View className="gap-1.5">
                    <Text className="font-bold">Número de contrato</Text>
                    <Input
                      // @ts-ignore
                      error={errors.numberContract?.message}
                      formProps={{
                        name: "numberContract",
                        control,
                        rules: {
                          minLength: {
                            value: 8,
                            message: "O número de contrato deve ter mais de 8 caracteres"
                          }
                        }
                      }}
                      inputProps={{
                        placeholder: "Ex: 224144253363",
                        keyboardType: "numeric"
                      }}
                    />
                  </View>

                  <Button onPress={handleSubmit(handleVerify)} title="Verificar" />

                  <Link
                    href="/(onboarding)/info-create-account"
                    className="text-right text-primary font-medium"
                  >
                    <TouchableWithoutFeedback onPress={handleCloseBottomSheet}>
                      <Text className='font-sans'>Criar um contrato ENDE</Text>
                    </TouchableWithoutFeedback>
                  </Link>
                </View>

                <View className="w-full h-24 " />
              </View>
            </KeyboardAvoidingView>
          </TouchableWithoutFeedback>

        }

      />
    </View>
  )
}