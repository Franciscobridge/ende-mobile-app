import { Feather } from '@expo/vector-icons'
import { Text, TouchableOpacity, View } from 'react-native'
import { useUniwind } from 'uniwind'

type RecentAddProps = {
  data: string,
  saldo: string
  valor: string
}

export function RecentAdd({ data, saldo, valor }: RecentAddProps) {

  const { theme } = useUniwind()

  return (
    <TouchableOpacity
      activeOpacity={0.5}
      className="bg-light-background/40 dark:bg-card/20 w-full flex-row h-16 gap-2 px-3 rounded-lg items-center"
    >
      {/* <Feather v vname="calendar" size={25} color="#05df72" /> */}
      <Feather name="calendar" size={25} color="#05df72" />
      <View>
        <Text className="font-bold text-light-foreground dark:text-white">{data}</Text>
        <View className="w-full flex-row gap-3 items-center">
          <Text className="text-xs text-light-foreground font-bold dark:text-foreground/80">
            Saldo: <Text className="text-green-400">{`${saldo} kw`}</Text>
          </Text>
          <Text className="text-xs text-light-foreground/80 dark:text-foreground/50">|</Text>
          <Text className="text-xs text-light-foreground font-bold dark:text-foreground/80">
            Valor: <Text className="text-green-400">{`${valor} kz`}</Text>
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}