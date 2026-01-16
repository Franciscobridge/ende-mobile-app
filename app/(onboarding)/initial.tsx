import { useCustomBottomSheetWithRef } from "@/components/custom/bottom-sheet"
import BottomSheetVerifyContract from "@/components/custom/verify-contract/bottom-sheet"
import { useRouter } from "expo-router"
import { useState } from "react"
import {
  Text,
  View
} from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { Header } from "../../components/custom/header"
import { ModalVerifyContract } from "../../components/custom/verify-contract/modal"
import { Button } from "../../components/ui/button"
import { ContractData } from "../../constants/contract-data-user"

export default function Initial() {
  const router = useRouter()
  const [numberContract, setNumberContract] = useState("")
  const [isDialogVisible, setIsDialogVisible] = useState(false)
  const [loading, setLoading] = useState(false)

  const [bottomSheetModalRef, handleOpenBottomSheet, handleCloseBottomSheet] = useCustomBottomSheetWithRef()

  const isDisabled = numberContract.trim() === ""


  function handleVerify() {
    setIsDialogVisible(true)
    handleCloseBottomSheet()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
    }, 1800)
  }

  function handleConfirm() {
    setIsDialogVisible(false)
    router.push("/(onboarding)/scanner-bar-code")
  }

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

          <Button onPress={handleOpenBottomSheet} title="Começar agora" />

          <Text className="text-light-foreground/80 dark:text-foreground/80 text-xs mt-8 font-sans text-center">
            © {new Date().getFullYear()} Ende App
          </Text>
        </View>

        <BottomSheetVerifyContract
          bottomSheetModalRef={bottomSheetModalRef}
          handleVerify={handleVerify}
          isDisabled={isDisabled}
          numberContract={numberContract}
          setNumberContract={setNumberContract}
          handleCloseBottomSheet={handleCloseBottomSheet}
        />

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
