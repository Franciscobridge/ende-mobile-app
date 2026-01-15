import { BottomSheetModalProvider } from "@gorhom/bottom-sheet"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import { GestureHandlerRootView } from "react-native-gesture-handler"
import { Uniwind } from "uniwind"
import "../global.css"
import { useAppFonts } from "../hooks/useAppFonts"

SplashScreen.preventAutoHideAsync()
Uniwind.setTheme("dark")


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
      <BottomSheetModalProvider>
        <Stack>
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/index" />
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/modal" />
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/initial" />
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/scanner-bar-code" />
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/create-password" />
          <Stack.Screen options={{ headerShown: false }} name="(onboarding)/info-create-account" />
          <Stack.Screen options={{ headerShown: false }} name="auth/login" />
          <Stack.Screen options={{ headerShown: false }} name="(with-login)/(tabs)" />
          <Stack.Screen options={{ headerShown: false }} name="(with-login)/instant-consumption" />
          <Stack.Screen options={{ headerShown: false }} name="(with-login)/expected-end" />
          <Stack.Screen options={{ headerShown: false }} name="(with-login)/add-energy" />
        </Stack>
      </BottomSheetModalProvider>
    </GestureHandlerRootView>
  )
}
