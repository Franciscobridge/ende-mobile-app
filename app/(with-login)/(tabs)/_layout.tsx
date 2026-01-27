import { Feather } from "@expo/vector-icons"
import { Tabs, useRouter } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"
// import { Bell } from "lucide-react-native"
import { useUniwind } from "uniwind"


export default function TabsLayout() {

  const router = useRouter()
  const { theme } = useUniwind()

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Tabs
        screenOptions={{
          headerShown: true,
          headerStyle: { backgroundColor: theme === "light" ? "#FCFCFC" : "#1a1a1a" },
          headerTitleAllowFontScaling: true,
          headerTitleStyle: { fontSize: 21, fontFamily: "Inter-Bold", color: theme === "light" ? "#111111" : "white", marginLeft: 3 },
          tabBarStyle: {
            backgroundColor: theme === "light" ? "#FCFCFC" : "#1a1a1a",
            borderTopWidth: 0,
            paddingTop: 10,
            height: 68,
          },
          tabBarActiveTintColor: "#F04444",
          tabBarInactiveTintColor: "#888",
          tabBarLabelStyle: {
            fontSize: 11,
            marginBottom: 6,
            fontFamily: "Inter-Bold"
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            headerTitle: "Painel Central",
            title: "Inicio",
            tabBarIcon: ({ color, size }) => <Feather name="home" size={size} color={color} />,
          }}
        />

        <Tabs.Screen
          name="history"
          options={{
            headerTitle: "Histórico",
            title: "Histórico",
            tabBarIcon: ({ color, size }) => <Feather name="bar-chart-2" size={size} color={color} />,
          }}
        />

        <Tabs.Screen
          name="payment"
          options={{
            headerTitle: "Pagamentos",
            title: "Pagamentos",
            tabBarIcon: ({ color, size }) => <Feather name="credit-card" size={size} color={color} />,
          }}
        />

        <Tabs.Screen
          name="settings"
          options={{
            headerTitle: "Definições",
            title: "Definições",
            tabBarIcon: ({ color, size }) => <Feather name="settings" size={size} color={color} />,
          }}
        />
      </Tabs>
    </SafeAreaView>
  )
}
