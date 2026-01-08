import { Image, Text, View } from "react-native"
import { useUniwind } from "uniwind"

export function Header() {
  const { theme } = useUniwind()

  return (
    <View className="relative flex flex-col mt-16 items-center justify-center">
      {theme === "light" ? (
        <Image
          source={require("../../../assets/images/logo-light.png")}
          style={{ width: 360, height: 220 }}
          resizeMode="contain"
        />
      ) : (
        <Image
          source={require("../../../assets/images/logo-dark.png")}
          style={{ width: 360, height: 200 }}
          resizeMode="contain"
        />
      )}
      <Text className="text-light-foreground dark:text-white font-bold absolute bottom-15 dark:bottom-11 left-11 text-2xl">
        APP
      </Text>
    </View>
  )
}
