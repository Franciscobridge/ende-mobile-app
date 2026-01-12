import { Text, View } from "react-native"

export function Info({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text className="text-card text-xs font-sans">{label}</Text>
      <Text className="text-background font-bold">{value}</Text>
    </View>
  )
}
