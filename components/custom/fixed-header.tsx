import { Feather } from "@expo/vector-icons"
import { usePathname, useRouter } from "expo-router"
import { Text, TouchableOpacity, View } from "react-native"
import { useUniwind } from "uniwind"

export function FixedHeader({ title }: { title: string }) {
  const pathname = usePathname()
  const router = useRouter()
  const { theme } = useUniwind()
  return (
    <View className="px-4 py-6 flex-row items-center justify-between bg-light-background dark:bg-background">
      <View className="flex-row items-center gap-2">
        {pathname === "/instant-consumption" || pathname === "/add-energy" || pathname === "/expected-end" ? (
          <TouchableOpacity activeOpacity={0.5} onPress={() => router.back()}>
            <Feather name="arrow-left" size={24} color="#E9E9E9" />
          </TouchableOpacity>
        ) : null}
        <Text className="text-xl font-bold text-primary dark:text-white">{title}</Text>
      </View>

      {pathname === "/home" ? (
        <TouchableOpacity activeOpacity={0.5} className="relative rounded-full">
          <View className="absolute bg-primary items-center justify-center z-10 size-4 -right-1 -top-1 rounded-full">
            <Text className="text-white text-xs font-sans">3</Text>
          </View>
          <Feather name="bell" size={24} color={theme === "light" ? "#111111" : "#E9E9E9"} />
        </TouchableOpacity>
      ) : null}
    </View>
  )
}
