import { Text, View } from "react-native"
import { FixedHeader } from "../../../components/custom/fixed-header"

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
