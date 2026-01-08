import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useEffect } from "react"
import "../../global.css"
import { useAppFonts } from "../../hooks/useAppFonts"

SplashScreen.preventAutoHideAsync()

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
    <Stack screenOptions={{ animation: "ios_from_right" }}>
      <Stack.Screen name="(onboarding)/index" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)/verifyContract" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)/scannerBarCode" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)/createPassword" options={{ headerShown: false }} />
      <Stack.Screen name="(onboarding)/infoCreateAccount" options={{ headerShown: false }} />
      <Stack.Screen name="auth/login" options={{ headerShown: false }} />
      <Stack.Screen name="(with-login)/(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="(with-login)/instant-consumption" options={{ headerShown: false }} />
      <Stack.Screen name="(with-login)/expected-end" options={{ headerShown: false }} />
      <Stack.Screen name="(with-login)/add-energy" options={{ headerShown: false }} />
    </Stack>
  )
}
