import { useAudioPlayer } from "expo-audio"
import { CameraView, useCameraPermissions } from "expo-camera"
import { useRouter } from "expo-router"
import { useState } from "react"
import { Alert, Image, Modal, Text, TouchableOpacity, View } from "react-native"

export default function ScannerBarCode() {
  const [showCamera, setShowCamera] = useState(false)
  const [scannedData, setScannedData] = useState<string | null>(null)
  const [_, requestPermission] = useCameraPermissions()
  const router = useRouter()
  const audioSource = require("../../../lib/expo-audio/barcode-scanner-beep-sound-effect.mp3")
  const player = useAudioPlayer(audioSource)
  // Solicita permissão e abre a câmera
  async function handleOpenCamera() {
    try {
      const { granted } = await requestPermission()

      if (!granted) {
        return Alert.alert("Câmera", "Você precisa habilitar o uso da câmera")
      }

      setShowCamera(true)
    } catch (error) {
      console.error("Erro ao solicitar permissão:", error)
    }
  }

  function handleBarCode(data: string) {
    setScannedData(data)
    player.play()
    setShowCamera(false)
  }

  function handleConfirm() {
    console.log("Código confirmado:", scannedData)
    setScannedData(null)
    router.push("/(onboarding)/createPassword")
  }

  function handleCancel() {
    setScannedData(null)
    setShowCamera(true)
  }

  return (
    <View className="flex-1 bg-background px-6">
      <View className="flex-1 items-center justify-center">
        <Image
          source={require("../../../assets/images/ilustration.png")}
          resizeMode="contain"
          style={{ width: 260, height: 260 }}
        />

        <View className="mt-6 gap-2 px-2">
          <Text className="text-white font-bold text-xl text-center">Scanner de Código de Barras</Text>

          <Text className="text-foreground/80 text-center leading-5">
            Use a câmera para escanear o código de barras do seu medidor e vincular automaticamente o dispositivo à sua
            conta no ENDE APP.
          </Text>
        </View>
      </View>

      {/* Botão fixo */}
      <View className="pb-8">
        <TouchableOpacity
          className="rounded-lg px-6 py-3 items-center bg-primary"
          activeOpacity={0.7}
          onPress={handleOpenCamera}
        >
          <Text className="text-white font-bold text-base">Escanear código</Text>
        </TouchableOpacity>
      </View>

      <Modal visible={showCamera} animationType="slide">
        <View className="flex-1">
          <CameraView
            style={{ flex: 1 }}
            facing="back"
            onBarcodeScanned={({ data, type }) => {
              const allowedTypes = ["ean13", "code128", "upc"]
              if (allowedTypes.includes(type)) {
                handleBarCode(data)
              }
            }}
          />
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            />

            <View style={{ flexDirection: "row" }}>
              <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }} />

              <View
                style={{
                  width: 250,
                  height: 150,
                  borderWidth: 2,
                  borderStyle: "dashed",
                  borderColor: "#555555",
                  borderRadius: 12,
                }}
              />

              <View style={{ flex: 1, backgroundColor: "rgba(0,0,0,0.6)" }} />
            </View>

            <View
              style={{
                flex: 1,
                width: "100%",
                backgroundColor: "rgba(0,0,0,0.6)",
              }}
            />
          </View>

          <View className="absolute bottom-5 right-8 left-8">
            <TouchableOpacity className="bg-red-500 rounded-lg py-3 items-center" onPress={() => setShowCamera(false)}>
              <Text className="text-white font-bold">Cancelar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      <Modal visible={scannedData !== null} transparent animationType="fade">
        <View className="flex-1 bg-black/60 justify-center items-center px-6">
          <View className="bg-foreground w-full rounded-2xl p-6 gap-4">
            <Text className="text-xl font-bold text-background text-center">Confirmar Código</Text>
            <Text className="text-card text-center">
              O código lido é:
              {"\n"}
              <Text className="font-bold">{scannedData}</Text>
            </Text>

            <View className="flex-row justify-between gap-4 mt-4">
              <TouchableOpacity className="flex-1 bg-red-500 py-3 rounded-lg items-center" onPress={handleCancel}>
                <Text className="text-white font-bold">Cancelar</Text>
              </TouchableOpacity>
              <TouchableOpacity className="flex-1 bg-green-500 py-3 rounded-lg items-center" onPress={handleConfirm}>
                <Text className="text-white font-bold">Confirmar</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}
