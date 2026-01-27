import { SettingItemProps } from '@/@types/settings-types'
import { selectColorBg } from '@/utils/select-color-fn'
import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useUniwind } from 'uniwind'

export function SettingItem({ title, description, color = "green", icon }: SettingItemProps) {

  const { theme } = useUniwind()


  return (
    <TouchableOpacity className="w-full py-2 px-5 flex-row items-center justify-between overflow-hidden" activeOpacity={0.5}>
      <View className="flex-row gap-2 items-center">
        <View className={`${selectColorBg(color, theme, 'active')} p-2 rounded-xl`}
        >
          <Feather name={icon} size={24} color="#ffffff" />
        </View>
        <View className="w-[90%]">
          <Text className="font-bold text-light-foreground dark:text-white">{title}</Text>
          <Text className="font-sans text-xs text-light-foreground/70 dark:text-foreground/80">{description}</Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}