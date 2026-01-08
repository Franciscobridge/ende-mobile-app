import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Text, TouchableOpacity } from "react-native"

type ButtonSquareProps = {
  // icon: React.ComponentProps<typeof Feather>["name"]
  icon: keyof typeof Feather.glyphMap
  description: string
}

export default function ButtonSquare({ icon, description }: ButtonSquareProps) {
  const router = useRouter()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => router.push("/(with-login)/instant-consumption")}
      className="size-24 bg-green-400/5 rounded-lg items-center gap-1.5 justify-center"
    >
      <Feather name={icon} size={29} color="#05df72" />
      <Text className="text-white text-xs font-bold text-center">{description}</Text>
    </TouchableOpacity>
  )
}
