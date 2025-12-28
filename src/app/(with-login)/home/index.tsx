import { StatusBar } from 'expo-status-bar'
import { Text, View } from 'react-native'

export default function Home() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <StatusBar backgroundColor="#111111" translucent style="light" />

      <Text className="font-bold text-xl text-white">Painel principal</Text>
    </View>
  )
}