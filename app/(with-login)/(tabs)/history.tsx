import { HistoryItem } from "@/components/custom/history/history.-item"
import { SummaryCard } from "@/components/custom/history/summary-card"
import { MOCK_RECHARGE } from "@/constants/mock-data-recharge"
import { selectColorBg, selectTextColor } from "@/utils/select-color-fn"
import { Feather } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { BarChart } from "react-native-gifted-charts"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"

const PERIODS = ["Hoje", "7d", "15d", "Mês"]

const MOCK_CONSUMPTION_BAR = [
  { value: 3.2, label: "01" },
  { value: 4.1, label: "02" },
  { value: 2.8, label: "03" },
  { value: 5.0, label: "04" },
  { value: 4.6, label: "05" },
]


export default function History() {
  const { theme } = useUniwind()

  const [activePeriod, setActivePeriod] = useState("Mês")
  const [activeTab, setActiveTab] = useState<"consumption" | "recharge">("consumption")

  return (
    <>
      <Tabs.Screen options={{ title: "Histórico" }} />

      <View className="flex-1 bg-light-card dark:bg-background">
        <SafeAreaView style={{ flex: 1 }}>
          <ScrollView
            className="flex-1 px-4"
            contentContainerStyle={{ gap: 16, paddingBottom: 30 }}
            showsVerticalScrollIndicator={false}
          >
            <View className="flex-row gap-2 mt-5">
              {PERIODS.map(period => (
                <TouchableOpacity
                  key={period}
                  activeOpacity={0.7}
                  onPress={() => setActivePeriod(period)}
                  className={`px-4 py-2 rounded-full ${activePeriod === period
                    ? `${selectColorBg("green", theme, "no-active")}`
                    : "bg-light-background/40 dark:bg-card/20"
                    }`}
                >
                  <Text
                    className={`text-sm ${activePeriod === period
                      ? "text-white"
                      : "text-light-foreground dark:text-foreground"
                      }`}
                    style={{
                      color: activePeriod === period ? selectTextColor("green") : undefined,
                    }}
                  >
                    {period}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>


            <View className="flex-row gap-3 mt-4">
              <SummaryCard
                icon="zap"
                color="green"
                title="Consumo total"
                value="124 kWh"
              />
              <SummaryCard
                icon="dollar-sign"
                color="blue"
                title="Gasto estimado"
                value="18 600 Kz"
              />
            </View>

            <View className="flex-row gap-3">
              <SummaryCard
                icon="clock"
                color="orange"
                title="Média diária"
                value="4.1 kWh"
              />
              <SummaryCard
                icon="alert-triangle"
                color="yellow"
                title="Alto consumo"
                value="2 dias"
              />
            </View>

            <View className="bg-light-background/40 dark:bg-card/20 rounded-lg p-4 overflow-hidden">
              <Text className="text-sm font-bold mb-2 text-light-foreground dark:text-white">
                Consumo diário (kWh)
              </Text>
              <BarChart
                data={MOCK_CONSUMPTION_BAR.map((d, i) => ({
                  ...d,
                  frontColor: i % 2 === 0 ? "#22C55E20" : "#3B82F620",
                  gradientColor: i % 2 === 0 ? "#22C55E" : "#3B82F6",
                  showGradient: true
                }))}
                height={120}
                barWidth={25}
                spacing={20}
                barBorderRadius={5}
                hideRules
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={4}
                maxValue={10}
                frontColor="#111111"
                yAxisTextStyle={{
                  color: theme === "light" ? "#111111" : "#ffffff",
                  fontSize: 10,
                }}
                xAxisLabelTextStyle={{
                  color: theme === "light" ? "#111111" : "#ffffff",
                  fontSize: 10,
                }}
              // showValuesAsTopLabel
              />
            </View>

            <View className="flex-row bg-light-background/40 dark:bg-card/20 rounded-full p-1">
              <TouchableOpacity
                onPress={() => setActiveTab("consumption")}
                className={`flex-1 py-2 rounded-full items-center flex-row justify-center gap-1 ${activeTab === "consumption" ? "bg-primary" : ""
                  }`}
              >
                <Feather name="bar-chart-2" size={16} color={activeTab === "consumption" ? "#fff" : theme === "light" ? "#111" : "#fff"} />
                <Text className={activeTab === "consumption" ? "text-white" : "text-light-foreground dark:text-foreground"}>
                  Consumo
                </Text>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => setActiveTab("recharge")}
                className={`flex-1 py-2 rounded-full items-center flex-row justify-center gap-1 ${activeTab === "recharge" ? "bg-primary" : ""
                  }`}
              >
                <Feather name="credit-card" size={16} color={activeTab === "recharge" ? "#fff" : theme === "light" ? "#111" : "#fff"} />
                <Text className={activeTab === "recharge" ? "text-white" : "text-light-foreground dark:text-foreground"}>
                  Recargas
                </Text>
              </TouchableOpacity>
            </View>

            <View className="gap-3">
              {activeTab === "consumption" ? (
                <>
                  <HistoryItem date="12 Jan" value="4.2 kWh" amount="620 Kz" icon="zap" color="#22C55E" />
                  <HistoryItem date="11 Jan" value="3.8 kWh" amount="560 Kz" icon="zap" color="#3B82F6" />
                  <HistoryItem date="10 Jan" value="5.1 kWh" amount="710 Kz" alert icon="alert-triangle" color="#F97316" />
                  <HistoryItem date="09 Jan" value="7.1 kWh" amount="710 Kz" alert icon="alert-triangle" color="#F97316" />
                </>
              ) : (
                MOCK_RECHARGE.map((item, index) => (
                  <HistoryItem
                    key={item.date + item.hour}
                    date={item.date}
                    value={item.value}
                    amount={item.amount}
                    icon="credit-card"
                    color={index % 2 === 0 ? "#22C55E" : "#3B82F6"}
                    time={item.hour}
                  />
                ))
              )}
            </View>
            {activeTab === "consumption" && (
              <TouchableOpacity activeOpacity={0.5} className="w-full justify-end flex-row">
                <Text className="text-light-foreground dark:text-foreground/80 font-sans">Ver todos...</Text>
              </TouchableOpacity>
            )}
            {activeTab === "recharge" && (
              <TouchableOpacity activeOpacity={0.5} className="w-full justify-end flex-row">
                <Text className="text-light-foreground dark:text-foreground/80 font-sans">Ver todos...</Text>
              </TouchableOpacity>
            )}
            {activeTab === "recharge" && (
              <TouchableOpacity className="bg-primary rounded-lg py-3 items-center flex-row justify-center gap-2">
                <Feather name="plus-circle" size={20} color="#fff" />
                <Text className="text-white font-bold">Recarregar Energia</Text>
              </TouchableOpacity>
            )}
          </ScrollView>
        </SafeAreaView>
      </View>
    </>
  )
}
