import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

type Variant = "primary" | "secundary"

type ButtonSquareProps = {
  icon: keyof typeof Feather.glyphMap
  description: string
  variant?: Variant
}

export default function ButtonSquare({ icon, description, variant = "primary" }: ButtonSquareProps) {

  const router = useRouter()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => router.push("/(with-login)/instant-consumption")}
      // className={`${variant === "primary" && "bg-green-400/5"} ${variant === "secundary" && "bg-blue-500/10"} rounded-lg items-center justify-center`}
      className={`${variant === "primary" && "bg-green-400/5"} ${variant === "secundary" && "bg-blue-500/10"} flex-1 rounded-lg items-center justify-center py-2`}
    >
      <Feather name={icon} size={29} color={variant === "primary" ? "#05df72" : "#447DF7"} />
      <Text className="text-light-foreground dark:text-white text-xs font-bold text-center w-[70%]">{description}</Text>
    </TouchableOpacity>
  )
}

