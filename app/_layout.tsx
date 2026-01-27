import { CustomNotificationProvider } from "@/components/custom/notification"
import { Feather } from "@expo/vector-icons"
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { StatusBar } from "expo-status-bar"
import { useEffect } from "react"
import { TouchableOpacity } from "react-native"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Uniwind, useUniwind } from "uniwind"
import "../global.css"
import { useAppFonts } from "../hooks/useAppFonts"

SplashScreen.preventAutoHideAsync()
Uniwind.setTheme("light")


export default function RootLayout() {
  const { theme } = useUniwind()
  const fontsLoaded = useAppFonts()
  useEffect(() => {
    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <BottomSheetModalProvider>
        <CustomNotificationProvider>
          <Stack>
            <StatusBar style="light" backgroundColor="#111111" />
            <Stack.Screen options={{ headerShown: false }} name="(onboarding)/index" />
            <Stack.Screen options={{ headerShown: false }} name="(onboarding)/initial" />
            <Stack.Screen options={{ headerShown: false }} name="(onboarding)/info-create-account" />
            <Stack.Screen options={{ headerShown: false }} name="(onboarding)/scanner-bar-code" />
            <Stack.Screen options={{ headerShown: false }} name="(onboarding)/create-password" />
            <Stack.Screen
              options={{
                headerShown: true,
                headerTitle: "Gerencie sua energia",
                headerStyle: { backgroundColor: "#F04444" },
                headerRight: () => {
                  return (
                    <TouchableOpacity className="mr-4" activeOpacity={0.5}>
                      <Feather name="info" size={25} color="#ffffff" />
                    </TouchableOpacity>
                  )
                },
                headerTitleStyle: { fontSize: 21, fontWeight: "bold", fontFamily: "Inter-Bold", color: theme === "light" ? "#111111" : "white" },
              }}
              name="auth/login"
            />
            <Stack.Screen options={{ headerShown: false }} name="(with-login)/(tabs)" />
            <Stack.Screen options={{ headerShown: false }} name="(with-login)/instant-consumption" />
            <Stack.Screen options={{ headerShown: false }} name="(with-login)/expected-end" />
            <Stack.Screen options={{ headerShown: false }} name="(with-login)/add-energy" />
            <Stack.Screen
              options={{
                presentation: "modal",
                headerTitle: "Notificações",
              }}
              name="(with-login)/notification"
            />
          </Stack>
        </CustomNotificationProvider>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
