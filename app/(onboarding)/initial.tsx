import { Feather } from "@expo/vector-icons"
import { Link, useRouter } from "expo-router"
import { useEffect, useRef, useState } from "react"
import {
  Animated,
  KeyboardAvoidingView,
  PanResponder,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../components/custom/header"
import { ModalVerifyContract } from "../../components/custom/verify-contract/modal"
import { Button } from "../../components/ui/button"
import { ContractData } from "../../constants/contract-data-user"

export default function Initial() {
  const router = useRouter()

  const [isOpen, setIsOpen] = useState(false)
  const translateY = useRef(new Animated.Value(600)).current
  const currentTranslateY = useRef(600) // guarda posição atual
  const [numberContract, setNumberContract] = useState("")
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const isDisabled = numberContract.trim() === ""

  useEffect(() => {
    const id = translateY.addListener(({ value }) => {
      currentTranslateY.current = value
    })
    return () => translateY.removeListener(id)
  }, [translateY])

  function openModal() {
    setIsOpen(true)
    Animated.spring(translateY, {
      toValue: 0,
      useNativeDriver: true,
      damping: 18,
      stiffness: 120,
    }).start()
  }

  function closeModal() {
    Animated.timing(translateY, {
      toValue: 600,
      duration: 250,
      useNativeDriver: true,
    }).start(() => setIsOpen(false))
  }

  function handleVerify() {
    setIsDialogVisible(true)
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }


  function handleConfirm() {
    setIsDialogVisible(false)
    router.push("/(onboarding)/scanner-bar-code")
  }


  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gesture) => gesture.dy > 50,
      onPanResponderMove: (_, gesture) => {
        let newY = currentTranslateY.current + gesture.dy
        if (newY < 0) newY = 0
        if (newY > 600) newY = 600
        translateY.setValue(newY)
      },
      onPanResponderRelease: (_, gesture) => {
        // se arrastou mais de 100px para baixo, fecha
        if (gesture.dy > 100) {
          closeModal()
        } else {
          Animated.spring(translateY, {
            toValue: 0,
            useNativeDriver: true,
            damping: 18,
            stiffness: 120,
          }).start()
        }
      },
    })
  ).current

  return (
    <View style={{ flex: 1, backgroundColor: "#111111" }}>
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 px-5 gap-10 items-center bg-light-background dark:bg-background">
          <Header />

          <View className="justify-center items-center mt-5 gap-y-3">
            <Text className="text-light-foreground dark:text-white font-bold text-2xl text-center">
              Bem vindo
            </Text>

            <Text className="text-light-foreground/80 dark:text-foreground/80 text-center font-sans">
              Tenha total controle da sua conta de energia, com acesso rápido ao consumo, pagamentos e alertas que
              facilitam o seu dia a dia.
            </Text>
          </View>

          <Button onPress={openModal} title="Começar agora" />

          <Text className="text-light-foreground/80 dark:text-foreground/80 text-xs mt-8 font-sans text-center">
            © {new Date().getFullYear()} Ende App
          </Text>
        </View>

        {isOpen && (
          <View
            style={{
              ...StyleSheet.absoluteFillObject,
              justifyContent: "flex-end",
              backgroundColor: "rgba(0,0,0,0.4)",
            }}
          >
            <TouchableWithoutFeedback onPress={closeModal}>
              <View style={{ flex: 1 }} />
            </TouchableWithoutFeedback>

            <KeyboardAvoidingView
              behavior={Platform.OS === "ios" ? "padding" : "height"}
            >
              <Animated.View
                style={{
                  transform: [{ translateY }],
                  backgroundColor: "#fff",
                  borderTopLeftRadius: 24,
                  borderTopRightRadius: 24,
                  padding: 24,
                  gap: 24,
                }}
              >
                <View
                  {...panResponder.panHandlers}
                  className="w-full items-center pb-2"
                >
                  <View className="w-20 h-1 bg-gray-400 rounded-full" />
                </View>

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
                    <TextInput
                      className="bg-gray-100 rounded-md h-11 px-3"
                      placeholder="Ex: 224144253363"
                      keyboardType="numeric"
                      value={numberContract}
                      onChangeText={setNumberContract}
                    />
                  </View>

                  <Button onPress={handleVerify} disabled={isDisabled} title="Verificar" />

                  <Link
                    href="/(onboarding)/info-create-account"
                    className="text-right text-primary font-medium"
                  >
                    Criar um contrato ENDE
                  </Link>
                </View>

                <View className="w-full h-28" />
              </Animated.View>
            </KeyboardAvoidingView>
          </View>
        )}

        <ModalVerifyContract
          contractData={ContractData}
          handleConfirm={handleConfirm}
          loading={loading}
          isDialogVisible={isDialogVisible}
          setIsDialogVisible={setIsDialogVisible}
        />
      </SafeAreaView>
    </View>
  )
}
