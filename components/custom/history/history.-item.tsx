import { Feather } from "@expo/vector-icons"
import { Text, View } from "react-native"
import { useUniwind } from "uniwind"

type HistoryItemProps = {
  date: string
  value: string
  amount: string
  alert?: boolean
  icon?: keyof typeof Feather.glyphMap
  color?: string
  time?: string
}

export function HistoryItem({
  date,
  value,
  amount,
  alert,
  icon,
  color,
  time,
}: HistoryItemProps) {
  const { theme } = useUniwind()
  return (
    <View className="flex-row justify-between items-center bg-light-background/40 dark:bg-card/20 rounded-lg px-4 py-3">
      <View className="flex-row items-center gap-2">
        {icon && <Feather name={icon} size={20} color={color || (theme === "light" ? "#111" : "#fff")} />}
        <View>
          <Text className="text-sm text-light-foreground dark:text-foreground">{date} {time && `• ${time}`}</Text>
          <Text className="font-bold text-light-foreground dark:text-white">{value}</Text>
        </View>
      </View>

      <View className="flex-row items-center gap-2">
        <Text className="font-semibold text-light-foreground dark:text-white">{amount}</Text>
        {alert && <Feather name="alert-triangle" size={16} color="#F97316" />}
      </View>
    </View>
  )
}
