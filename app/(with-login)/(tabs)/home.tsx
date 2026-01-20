// import ButtonSquare from "@/components/custom/button-square"
// import { Feather } from "@expo/vector-icons"
// import { useRouter } from "expo-router"
// import { ScrollView, Text, TouchableOpacity, View } from "react-native"
// import { SafeAreaView } from "react-native-safe-area-context"
// import { EnergyUsageIndicator } from "../../../components/custom/energy-usage-indicator"
// import { FixedHeader } from "../../../components/custom/fixed-header"
// import { EnergyLineChart } from "../../../components/custom/line-chart"

import ButtonSquare from "@/components/custom/button-square";
import { EnergyUsageIndicator } from "@/components/custom/energy-usage-indicator";
import { FixedHeader } from "@/components/custom/fixed-header";
import { EnergyLineChart } from "@/components/custom/line-chart";
import { Feather } from "@expo/vector-icons";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useUniwind } from "uniwind";

// export default function Home() {
//   const router = useRouter()
//   const remainingBalance = 756.7

//   return (
//     <SafeAreaView style={{ flex: 1 }}>
//       <View className="flex-1 bg-background">
//         <FixedHeader title="Painel Central" />

//         <ScrollView
//           className="flex-1"
//           contentContainerStyle={{ paddingBottom: 24, gap: 15 }}
//           showsVerticalScrollIndicator={false}
//         >
// <View className="w-full px-6 items-center">
//   <View className="w-full h-40 bg-card/20 rounded-lg px-3 py-5 flex-row items-center justify-between">
//     <View className="gap-8">
//       <Text className="text-xl font-bold text-white">Saldo restante</Text>
//       <View className="flex-row items-baseline gap-1">
//         <Text className={`font-bold ${remainingBalance >= 20 ? "text-green-400" : "text-primary"} text-5xl`}>
//           {remainingBalance}
//         </Text>
//         <Text className="text-foreground text-xs">Kwh</Text>
//       </View>
//     </View>
//     <EnergyUsageIndicator />
//   </View>
// </View>

// <View className="flex-row mx-6 bg-red-600">
//   <ButtonSquare description="Consumo instantâneo" icon="zap" />
//   <ButtonSquare description="Término previsto" icon="clock" />
//   <ButtonSquare description="Recarregar Energia" icon="credit-card" variant="secundary" />
// </View>
// <View className="w-full px-6">
//   <View className="bg-card/20 overflow-hidden w-full h-36 rounded-lg p-3">
//     <View>
//       <Text className="font-bold text-white z-10">Histórico de consumo</Text>
//       <Text className="text-green-400 -mt-0.5 z-10">Hoje</Text>
//     </View>
//     <EnergyLineChart />
//   </View>
// </View>
// <View className="w-full px-6 gap-2">
//   <View className="flex-row gap-1">
//     <Feather name="repeat" size={20} color="#ffffff" />
//     <Text className="text-white font-bold">Carregamentos recentes</Text>
//   </View>
//   <TouchableOpacity
//     activeOpacity={0.5}
//     className="bg-card/20 w-full flex-row h-14 gap-2 px-3 rounded-lg items-center"
//   >
//     <Feather name="calendar" size={25} color="#05df72" />
//     <View>
//       <Text className="font-bold text-white">10/02/2026</Text>
//       <View className="w-full flex-row gap-3 items-center">
//         <Text className="text-xs text-foreground/80">
//           Saldo: <Text className="text-green-400">{"220.5 kw"}</Text>
//         </Text>
//         <Text className="text-xs text-foreground/50">|</Text>
//         <Text className="text-xs text-foreground/80">
//           Valor: <Text className="text-green-400">{"3500 kz"}</Text>
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
//   <TouchableOpacity
//     activeOpacity={0.5}
//     className="bg-card/20 w-full flex-row h-14 gap-2 px-3 rounded-lg items-center"
//   >
//     <Feather name="calendar" size={25} color="#05df72" />
//     <View>
//       <Text className="font-bold text-white">25/12/2025</Text>
//       <View className="w-full flex-row gap-3 items-center">
//         <Text className="text-xs text-foreground/80">
//           Saldo: <Text className="text-green-400">{"320.5 kw"}</Text>
//         </Text>
//         <Text className="text-xs text-foreground/50">|</Text>
//         <Text className="text-xs text-foreground/80">
//           Valor: <Text className="text-green-400">{"5000 kz"}</Text>
//         </Text>
//       </View>
//     </View>
//   </TouchableOpacity>
// </View>
//         </ScrollView>
//       </View>
//     </SafeAreaView>
//   )
// }

const remainingBalance = 132.4

export default function Home() {

  const { theme } = useUniwind()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View className="flex-1 bg-light-card dark:bg-background">
        <FixedHeader title="Painel Central" />
        <ScrollView
          className="flex-1 px-4"
          contentContainerStyle={{ gap: 15 }}
          showsVerticalScrollIndicator={false}
        >
          <View className="w-full items-center mt-5">
            <View className="w-full h-40 bg-light-background dark:bg-card/20 rounded-lg px-4 py-5 flex-row items-center justify-between">
              <View className="gap-8">
                <Text className="text-xl font-bold text-light-foreground dark:text-white">Saldo restante</Text>
                <View className="flex-row items-baseline gap-1">
                  <Text className={`font-bold ${remainingBalance >= 20 ? "text-green-400" : "text-primary"} text-5xl`}>
                    {remainingBalance}
                  </Text>
                  <Text className="text-light-foreground dark:text-foreground text-xs">Kwh</Text>
                </View>
              </View>
              <EnergyUsageIndicator />
            </View>
          </View>
          <View className="flex-row gap-3">
            <ButtonSquare description="Consumo instantâneo" icon="zap" />
            <ButtonSquare description="Término previsto" icon="clock" />
            <ButtonSquare description="Recarregar Energia" icon="credit-card" variant="secundary" />
          </View>
          <View className="w-full">
            <View className="bg-light-background dark:bg-card/20 w-full h-36 rounded-lg p-3">
              <View>
                <Text className="font-bold text-light-foreground dark:text-white z-10">Histórico de consumo</Text>
                <Text className="text-primary dark:text-green-400 -mt-0.5 z-10">Hoje</Text>
              </View>
              <EnergyLineChart />
            </View>
          </View>

          <View className="w-full gap-2">
            <View className="flex-row gap-1 items-center">
              <Feather name="repeat" size={20} color={theme === "light" ? "#111111" : "#ffffff"} />
              <Text className="text-light-foreground dark:text-white font-bold">Carregamentos recentes</Text>
            </View>
            <TouchableOpacity
              activeOpacity={0.5}
              className="bg-light-background dark:bg-card/20 w-full flex-row h-14 gap-2 px-3 rounded-lg items-center"
            >
              {/* <Feather name="calendar" size={25} color="#05df72" /> */}
              <Feather name="calendar" size={25} color={theme === "light" ? "#F04444" : "#05df72"} />
              <View>
                <Text className="font-bold text-light-foreground dark:text-white">10/02/2026</Text>
                <View className="w-full flex-row gap-3 items-center">
                  <Text className="text-xs text-light-foreground font-bold dark:text-foreground/80">
                    Saldo: <Text className="text-primary dark:text-green-400">{"220.5 kw"}</Text>
                  </Text>
                  <Text className="text-xs text-light-foreground/80 dark:text-foreground/50">|</Text>
                  <Text className="text-xs text-light-foreground font-bold dark:text-foreground/80">
                    Valor: <Text className="text-primary dark:text-green-400">{"3500 kz"}</Text>
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
          </View>

        </ScrollView>
      </View>
    </SafeAreaView>
  )
}