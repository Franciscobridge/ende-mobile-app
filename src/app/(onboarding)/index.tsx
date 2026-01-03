import { Header } from "@/components/custom/header"
import { Button } from "@/components/ui/button"
import { useRouter } from "expo-router"
import { StatusBar } from "expo-status-bar"
import { Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function Initial() {
  const router = useRouter()

  function handleStart() {
    router.push("/(onboarding)/verifyContract")
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <StatusBar style="inverted" backgroundColor="#111111" translucent />
      <View className="flex-1 px-6 gap-10 items-center bg-background">
        <Header />

        <View className="justify-center items-center mt-5 gap-y-3">
          <Text className="text-white font-bold text-2xl text-center">Bem vindo</Text>

          <Text className="text-foreground/80 text-center font-sans">
            Tenha total controle da sua conta de energia, com acesso rápido ao consumo, pagamentos e alertas que
            facilitam o seu dia a dia.
          </Text>
        </View>

        <Button onPress={handleStart} title="Começar agora" />

        <Text className="text-foreground/80 text-xs mt-8 font-sans text-center">
          © {new Date().getFullYear()} Ende App
        </Text>
      </View>
    </SafeAreaView>
  )
}
