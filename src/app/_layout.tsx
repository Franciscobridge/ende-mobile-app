import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Uniwind } from "uniwind"
import "../../global.css"
import { useAppFonts } from "../../hooks/useAppFonts"

SplashScreen.preventAutoHideAsync()
Uniwind.setTheme("light")


export default function RootLayout() {
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
      <Stack screenOptions={{
        animation: "ios_from_right",
        statusBarStyle: "inverted",
        statusBarTranslucent: true,
        headerShown: false
      }}>
        <Stack.Screen name="(onboarding)/index" />
        <Stack.Screen name="(onboarding)/initial" />
        <Stack.Screen name="(onboarding)/scanner-bar-code" />
        <Stack.Screen name="(onboarding)/create-password" />
        <Stack.Screen name="(onboarding)/info-create-account" />
        <Stack.Screen name="auth/login" />
        <Stack.Screen name="(with-login)/(tabs)" />
        <Stack.Screen name="(with-login)/instant-consumption" />
        <Stack.Screen name="(with-login)/expected-end" />
        <Stack.Screen name="(with-login)/add-energy" />
      </Stack>
    </GestureHandlerRootView>
  )
}
