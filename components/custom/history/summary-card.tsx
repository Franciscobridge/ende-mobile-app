import { selectColorBg, selectTextColor } from "@/utils/select-color-fn";
import { Feather } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useUniwind } from "uniwind";

type SummaryCardProps = {
  icon: keyof typeof Feather.glyphMap,
  color: string,
  title: string,
  value: string
}

export function SummaryCard({ icon, color, title, value }: SummaryCardProps) {

  const { theme } = useUniwind()

  return (
    <View className={`flex-1 rounded-lg overflow-hidden px-4 py-2 flex-row gap-2 relative ${selectColorBg(color, theme, "no-active")}`}>
      {/* <Feather name={icon} size={24} color={color} />
      <View>
        <Text className="text-sm text-light-foreground dark:text-foreground">{title}</Text>
        <Text className="text-xl font-bold" style={{ color }}>{value}</Text>
      </View> */}

      <View className={`size-10 ${selectColorBg(color, theme, "active")} rounded-xl absolute -top-2 -left-2 items-center justify-center`}>
        <Feather name={icon} size={20} color="white" className="mt-1.5 ml-1.5" />
      </View>
      <View className="ml-6">
        <Text className="dark:text-white font-sans">{title}</Text>
        <Text className="font-bold text-xl" style={{ color: selectTextColor(color) }}>{value}</Text>
      </View>
    </View>
  )
}
