import { SettingViewProps } from "@/@types/settings-types"
import { Text, View } from "react-native"

export function SettingView({ children, category }: SettingViewProps) {
  return (
    <View className="gap-1">
      <Text className="font-sans ml-5 text-light-foreground/70 dark:text-foreground">{category}</Text>
      <View className="bg-light-background/40 dark:bg-card/20 rounded-4xl overflow-hidden py-1.5">
        {children}
      </View>
    </View>
  )
}