import { HistoryItem } from "@/components/custom/history/history.-item"
import { SummaryCard } from "@/components/custom/history/summary-card"
import { MOCK_RECHARGE } from "@/constants/mock-data-recharge"
import { selectColorBg, selectTextColor } from "@/utils/select-color-fn"
import { Feather } from "@expo/vector-icons"
import { Tabs } from "expo-router"
import { useState } from "react"
import { ScrollView, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"

const PERIODS = ["Hoje", "7d", "30d", "Mês"]

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
            {/* <View className="flex-row gap-3">
              <SummaryCard
                icon="credit-card"
                color="#3B82F6"
                title="Saldo restante"
                value="288 kWh"
              />
            </View> */}

            {/* Filtro de período */}
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
                title="Alerta consumo"
                value="2 dias"
              />
            </View>

            {/* Gráfico de Barras */}
            {/* <View className="bg-light-background/40 dark:bg-card/20 rounded-lg p-4">
              <Text className="text-sm font-bold mb-2 text-light-foreground dark:text-white">
                Consumo diário (kWh)
              </Text>
              <BarChart
                data={MOCK_CONSUMPTION_BAR.map((d, i) => ({
                  ...d,
                  frontColor: i % 2 === 0 ? "#22C55E" : "#3B82F6",
                }))}
                barWidth={22}
                spacing={28}
                roundedTop
                hideRules
                yAxisThickness={0}
                xAxisThickness={0}
                noOfSections={3}
                frontColor="#111111"
                yAxisTextStyle={{
                  color: theme === "light" ? "#111111" : "#ffffff",
                  fontSize: 10,
                }}
                xAxisLabelTextStyle={{
                  color: theme === "light" ? "#111111" : "#ffffff",
                  fontSize: 10,
                }}
              // showValuesOnTopOfBars
              />
            </View> */}

            {/* Toggle Consumo / Recargas */}
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

            {/* Lista */}
            <View className="gap-3">
              {activeTab === "consumption" ? (
                <>
                  <HistoryItem date="12 Jan" value="4.2 kWh" amount="620 Kz" icon="zap" color="#22C55E" time="14:30" />
                  <HistoryItem date="11 Jan" value="3.8 kWh" amount="560 Kz" icon="zap" color="#3B82F6" time="11:15" />
                  <HistoryItem date="10 Jan" value="5.1 kWh" amount="710 Kz" alert icon="alert-triangle" color="#F97316" time="16:50" />
                  <HistoryItem date="10 Jan" value="5.1 kWh" amount="710 Kz" alert icon="alert-triangle" color="#F97316" time="16:50" />
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

            {/* CTA */}
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

// Card de resumo
// function SummaryCard({ icon, color, title, value }: { icon: keyof typeof Feather.glyphMap, color: string, title: string, value: string }) {
//   return (
//     <View className="flex-1 rounded-lg p-4 flex-row items-center gap-2" style={{ backgroundColor: `${color}10` }}>
//       <Feather name={icon} size={24} color={color} />
//       <View>
//         <Text className="text-sm text-light-foreground dark:text-foreground">{title}</Text>
//         <Text className="text-xl font-bold" style={{ color }}>{value}</Text>
//       </View>
//     </View>
//   )
// }

// Item da lista
