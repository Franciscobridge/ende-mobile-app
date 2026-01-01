import { Feather } from "@expo/vector-icons"
import { useEffect, useRef } from "react"
import { Animated, Easing, Text, View } from "react-native"

export function FancySpinner() {
  const scale = useRef(new Animated.Value(1)).current
  const rotate = useRef(new Animated.Value(0)).current

  useEffect(() => {
    // Pulso (vai e volta)
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.15,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 700,
          easing: Easing.inOut(Easing.ease),
          useNativeDriver: true,
        }),
      ])
    ).start()

    // Rotação contínua (sem pausa)
    Animated.loop(
      Animated.timing(rotate, {
        toValue: 1,
        duration: 900,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start()
  }, [])

  const spin = rotate.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "360deg"],
  })

  return (
    <View className="items-center gap-4 py-6">
      <Animated.View
        style={{
          transform: [{ scale }, { rotate: spin }],
        }}
        className="w-20 h-20 rounded-full border-4 border-primary border-t-transparent items-center justify-center"
      >
        <Feather name="zap" size={32} color="#FF2E2E" />
      </Animated.View>

      <Text className="text-card text-sm">A verificar contrato…</Text>
    </View>
  )
}
