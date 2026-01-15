import { Text, View } from "react-native"
import { FixedHeader } from "../../../components/custom/fixed-header"

export default function Payments() {
  return (
    <View className="flex-1 bg-background">
      <FixedHeader title="Pagamentos" />
      <View className="flex-1 items-center justify-center">
        <Text className="text-white">Pagamentos</Text>
      </View>
    </View>
  )
}
