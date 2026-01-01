import { FixedHeader } from "@/components/custom/fixed-header"
import { Text, View } from "react-native"

export default function History() {
  return (
    <View className="flex-1 bg-background">
      <FixedHeader title="Histórico" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Histórico de consumo</Text>
      </View>
    </View>
  )
}
