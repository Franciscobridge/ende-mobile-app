import { Text, View } from "react-native"
import { AnimatedCircularProgress } from "react-native-circular-progress"

export function EnergyUsageIndicator({ consumptionPercent }: { consumptionPercent: number }) {
  return (
    <AnimatedCircularProgress
      size={120}
      width={10}
      fill={consumptionPercent}
      tintColor={consumptionPercent >= 20 ? "#05df72" : "#F04444"}
      backgroundColor="#fee2e220"
    >
      {(fill: number) => (
        <View style={{ alignItems: "center" }}>
          <Text className={`font-bold text-xl ${consumptionPercent >= 20 ? "text-green-400" : "text-primary"}`}>
            {Math.round(fill)}%
          </Text>
          <Text className="font-bold text-light-foreground dark:text-foreground text-center text-xs">Consumo de Energia</Text>
        </View>
      )}
    </AnimatedCircularProgress>
  )
}
