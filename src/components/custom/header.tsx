import { Image, Text, View } from "react-native"

export function Header() {
  return (
    <View className="relative bg-amber-950 flex flex-col mt-24 items-center justify-center">
      <Image
        source={require("../../../assets/images/logo.png")}
        style={{ width: 360, height: 200 }}
        resizeMode="contain"
      />
      <Text className="text-white font-bold absolute bottom-12 left-12 text-2xl">APP</Text>
    </View>
  )
}
