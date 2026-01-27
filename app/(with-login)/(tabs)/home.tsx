import { ButtonSquare } from "@/components/custom/button-square";
import { EnergyUsageIndicator } from "@/components/custom/energy-usage-indicator";
import { HistoryLineChart } from "@/components/custom/history-line-chart";
import { HistoryItem } from "@/components/custom/history/history.-item";
import { MOCK_DATA_LINE_CHART } from "@/constants/mock-data-line-chart";
import { MOCK_RECHARGE } from "@/constants/mock-data-recharge";
import { Feather } from "@expo/vector-icons";
import { Tabs, useRouter } from "expo-router";
import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUniwind } from "uniwind";

export default function Home() {

  const router = useRouter()
  const { theme } = useUniwind()

  const [remainingBalance, setRemainingBalance] = useState<number>(288.3)
  const [consumptionPercent, setConsumptionPercent] = useState<number>(88)
  return (
    <>
      <Tabs.Screen options={{
        headerRight: () => {
          return (
            <TouchableOpacity activeOpacity={0.5} className="relative rounded-full mr-5" onPress={() => router.push("/(with-login)/notification")}>
              <View className="absolute bg-primary items-center justify-center z-10 size-4 -right-1 -top-1 rounded-full">
                <Text className="text-white text-xs font-sans">3</Text>
              </View>
              <Feather name="bell" size={25} color={theme === "light" ? "#111111" : "#E9E9E9"} />
            </TouchableOpacity>
          )
        },
      }} />
      <View className="flex-1 bg-light-card dark:bg-background">
        <SafeAreaView style={{ flex: 1 }}>
          <View className="flex-1 bg-light-card dark:bg-background">
            <ScrollView
              className="flex-1 px-4"
              contentContainerStyle={{ gap: 15, paddingBottom: 20, marginTop: -8 }}
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
                <ButtonSquare
                  route="/(with-login)/instant-consumption"
                  description="Consumo instantâneo"
                  icon="zap"
                  color="green"
                />
                <ButtonSquare
                  route="/(with-login)/expected-end"
                  description="Término previsto"
                  icon="clock"
                  color="green"
                />
                <ButtonSquare
                  route="/(with-login)/add-energy"
                  description="Recarregar Energia"
                  icon="credit-card"
                  color="blue"
                />
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
                  {MOCK_RECHARGE.map((item, index) => (
                    <HistoryItem
                      key={item.date + item.hour}
                      date={item.date}
                      value={item.value}
                      amount={item.amount}
                      icon="credit-card"
                      color={index % 2 === 0 ? "#22C55E" : "#3B82F6"}
                      time={item.hour}
                    />
                  ))}
                </View>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      </View>
    </>
  )
}