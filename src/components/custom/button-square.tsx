import { Feather } from "@expo/vector-icons"
import type { Icon } from "@expo/vector-icons/build/createIconSet"
import { Text, TouchableOpacity } from "react-native"

type ButtonSquareProps = {
  icon: Icon
}

export default function ButtonSquare() {
  return (
    <TouchableOpacity
      activeOpacity={0.5}
      onPress={() => router.push("/(with-login)/instant-consumption")}
      className="size-24 bg-green-400/5 rounded-lg items-center gap-1.5 justify-center"
    >
      <Feather name="zap" size={29} color="#05df72" />
      <Text className="text-white text-xs font-bold text-center ">{description}</Text>
    </TouchableOpacity>
  )
}
