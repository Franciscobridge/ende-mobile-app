import { selectColorBg, selectTextColor } from "@/utils/select-color-fn"
import { Feather } from "@expo/vector-icons"
import { Href, useRouter } from "expo-router"
import { Text, TouchableOpacity } from "react-native"
import { useUniwind } from "uniwind"

type ButtonSquareProps = {
  icon: keyof typeof Feather.glyphMap
  description: string
  color: string
  route: Href
}

export function ButtonSquare({ icon, description, color, route }: ButtonSquareProps) {

  const router = useRouter()
  const { theme } = useUniwind()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => router.push(route)}
      // className={`${variant === "primary" && "bg-green-400/5"} ${variant === "secundary" && "bg-blue-500/10"} rounded-lg items-center justify-center`}
      className={`${selectColorBg(color, theme, theme === "light" ? "active" : "no-active")} flex-1 rounded-lg items-center justify-center py-2`}
    >
      <Feather name={icon} size={29} color={theme === "light" ? "#ffffff" : selectTextColor(color)} />
      <Text className="text-white text-xs font-bold text-center w-[70%]">{description}</Text>
    </TouchableOpacity>
  )
}

// color={variant === "primary" ? "#05df72" : "#447DF7"}