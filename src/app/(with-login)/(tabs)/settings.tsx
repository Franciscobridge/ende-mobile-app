import { FixedHeader } from "@/components/custom/fixed-header"
import { Text, View } from "react-native"
export default function Settings() {
  return (
    <View className="flex-1 bg-background">
      <FixedHeader title="Definições" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Configurações</Text>
      </View>
    </View>
  )
}
