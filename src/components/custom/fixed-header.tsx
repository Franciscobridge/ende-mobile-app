import { Feather } from "@expo/vector-icons"
import { usePathname, useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"

export function FixedHeader({ title }: { title: string }) {
  const pathname = usePathname()
  const router = useRouter()
  return (
    <View className="px-6 py-6 flex-row items-center justify-between bg-background">
      <View className="flex-row items-center gap-2">
        {pathname === "/instant-consumption" || pathname === "/add-energy" || pathname === "/expected-end" ? (
          <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="#E9E9E9" />
          </TouchableOpacity>
        ) : null}
        <Text className="text-xl font-bold text-white">{title}</Text>
      </View>

      {pathname === "/home" ? (
        <TouchableOpacity activeOpacity={0.5} className="bg-card/30 p-3 rounded-full">
          <Feather name="bell" size={20} color="#E9E9E9" />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
