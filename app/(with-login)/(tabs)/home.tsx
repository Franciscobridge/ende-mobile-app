import { ButtonSquare } from "@/components/custom/button-square";
import { EnergyUsageIndicator } from "@/components/custom/energy-usage-indicator";
import { FixedHeader } from "@/components/custom/fixed-header";
import { HistoryLineChart } from "@/components/custom/history-line-chart";
import { RecentAdd } from "@/components/custom/recent-add";
import { MOCK_DATA_LINE_CHART } from "@/constants/mock-data-line-chart";
import { RECENT_ADD } from "@/constants/mock-recent-add";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUniwind } from "uniwind";

export default function Home() {

  const { theme } = useUniwind()
  const [remainingBalance, setRemainingBalance] = useState<number>(188.3)
  const [consumptionPercent, setConsumptionPercent] = useState<number>(88)
  return (
    <View className="flex-1 bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        <View className="flex-1 bg-light-card dark:bg-background">
          <FixedHeader title="Painel Central" />
          <ScrollView
            className="flex-1 px-4"
            contentContainerStyle={{ gap: 15, paddingBottom: 20, marginTop: -15 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="w-full items-center mt-5">
              <View className="w-full h-40 bg-light-background/40 dark:bg-card/20 rounded-lg px-4 py-5 flex-row items-center justify-between">
                <View className="gap-8">
                  <Text className="text-xl font-bold text-light-foreground dark:text-white">Saldo restante</Text>
                  <View className="flex-row items-baseline gap-1">
                    <Text className={`font-bold ${remainingBalance >= 20 ? "text-green-400" : "text-primary"} text-5xl`}>
                      {remainingBalance}
                    </Text>
                    <Text className="text-light-foreground dark:text-foreground text-xs">Kwh</Text>
                  </View>
                </View>
                <EnergyUsageIndicator consumptionPercent={consumptionPercent} />
              </View>
            </View>
            <View className="flex-row gap-3">
              <ButtonSquare description="Consumo instantâneo" icon="zap" />
              <ButtonSquare description="Término previsto" icon="clock" />
              <ButtonSquare description="Recarregar Energia" icon="credit-card" variant="secundary" />
            </View>
            <View className="w-full">
              <HistoryLineChart data={MOCK_DATA_LINE_CHART} />
            </View>

            <View className="w-full gap-2">
              <View className="flex-row gap-1 items-center">
                <Feather name="repeat" size={20} color={theme === "light" ? "#111111" : "#ffffff"} />
                <Text className="text-light-foreground dark:text-white font-bold">Carregamentos recentes</Text>
              </View>
              <View className="gap-3">
                {RECENT_ADD.map(item => (
                  <RecentAdd
                    key={item.data}
                    data={item.data}
                    saldo={item.saldo}
                    valor={item.valor}
                  />
                ))}
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
    </View>
  )
}