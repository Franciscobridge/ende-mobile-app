import { Input } from "@/components/ui/input"
import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Fragment, useRef, useState } from "react"
import { useForm } from "react-hook-form"
import {
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"
import { Button } from "../../components/ui/button"

export default function CreatePassword() {
  const router = useRouter()

  const [modalVisible, setModalVisible] = useState(false)
  const [success, setSuccess] = useState(false)
  const { theme } = useUniwind()
  const scaleAnim = useRef(new Animated.Value(0)).current

  const { control, handleSubmit, getValues, formState: { errors } } = useForm()

  function handleConfirmPassword(data: any) {
    console.log(data)
    setModalVisible(true)
    return data.password
  }

  function confirmPasswordValidator(confirmPassword: string) {
    const { password } = getValues()

    if (password === confirmPassword) {
      setSuccess(true)
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
        tension: 150,
      }).start()

      setTimeout(() => {
        setModalVisible(false)
        router.replace("/(with-login)/(tabs)/home")
      }, 1500)
    }
    return password === confirmPassword || "As senhas são diferentes."
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView
          className="flex-1 bg-light-background dark:bg-background"
          behavior={Platform.OS === "ios" ? "padding" : undefined}
        >
          <View className="flex-1 p-4 items-center justify-center gap-6">
            <View className="w-full items-center mb-2.5">
              {theme === "light" ? (
                <Image
                  source={require("../../assets/images/ilustration-login-light.png")}
                  resizeMode="contain"
                  style={{ width: 260, height: 260 }}
                />
              ) : (
                <Image
                  source={require("../../assets/images/ilustration-login-dark.png")}
                  resizeMode="contain"
                  style={{ width: 260, height: 260 }}
                />
              )}
              <View className="items-center gap-2 -mt-4">
                <Text className="text-primary dark:text-white font-bold text-2xl text-center">Criar chave de acesso</Text>
                <Text className="text-light-foreground font-sans dark:text-foreground/80 text-center px-6">
                  Defina uma chave de acesso segura para proteger sua conta e garantir acesso rápido ao aplicativo.
                </Text>
              </View>
            </View>

            <View className="w-full gap-4">
              <Input
                // @ts-ignore
                error={errors.password?.message}
                formProps={{
                  name: "password",
                  control,
                  rules: {
                    required: "A senha é obrigatória.",
                    minLength: {
                      value: 5,
                      message: "A senha deve ter mais de 4 caracteres"
                    }
                  }
                }}
                inputProps={{
                  placeholder: "Chave de acesso",
                  className: "bg-light-card dark:bg-card text-light-foreground dark:text-foreground rounded-md h-12 px-4 mb-2",
                  placeholderTextColor: theme === "light" ? "#11111150" : "#9CA3AF",
                  secureTextEntry: true,
                }}
              />
              <Button onPress={handleSubmit(handleConfirmPassword)} title="Criar chave de acesso" />
            </View>
          </View>

          <Modal visible={modalVisible} transparent animationType="fade" statusBarTranslucent>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View className="flex-1 bg-black/70 items-center justify-center px-6">
                <View className="bg-foreground w-full rounded-2xl p-6 gap-3">
                  {!success ? (
                    <Fragment>
                      <View className="flex-row justify-between items-start">
                        <View className="flex-1 pr-2">
                          <Text className="text-xl font-bold text-background">Confirmar chave de acesso</Text>
                        </View>

                        <TouchableOpacity onPress={() => setModalVisible(false)}>
                          <Feather name="x" size={24} color="#EF4444" />
                        </TouchableOpacity>
                      </View>
                      <Input
                        // @ts-ignore
                        error={errors.confirmPassword?.message}
                        formProps={{
                          name: "confirmPassword",
                          control,
                          rules: {
                            required: "Confirme a senha",
                            validate: confirmPasswordValidator
                          }
                        }}
                        inputProps={{
                          className: "bg-white text-background rounded-md h-12 px-4 w-full mt-4",
                          placeholder: "Confirmar chave de acesso",
                          secureTextEntry: true,
                          autoFocus: true
                        }}
                      />
                    </Fragment>
                  ) : (
                    <View className="items-center justify-center py-6">
                      <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                        <Feather name="check-circle" size={72} color="#F04444" />
                      </Animated.View>
                      <Text className="text-background font-bold text-lg text-center mt-4">
                        Chave criada com sucesso!
                      </Text>
                    </View>
                  )}
                </View>
              </View>
            </TouchableWithoutFeedback>
          </Modal>
        </KeyboardAvoidingView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  )
}
