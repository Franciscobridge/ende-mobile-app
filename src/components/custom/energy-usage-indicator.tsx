import { Text, View } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"

export function EnergyUsageIndicator() {
  const consumption = 73

  return (
    <AnimatedCircularProgress
      size={120}
      width={10}
      fill={consumption}
      tintColor={consumption >= 20 ? "#05df72" : "#F04444"}
      backgroundColor="#fee2e210"
    >
      {(fill: number) => (
        <View style={{ alignItems: "center" }}>
          <Text className={`font-bold text-xl ${consumption >= 20 ? "text-green-400" : "text-primary"}`}>
            {Math.round(fill)}%
          </Text>
          <Text className="font-bold text-foreground text-center text-xs">Consumo de Energia</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  )
}
