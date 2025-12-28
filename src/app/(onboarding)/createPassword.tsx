import { Feather } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { useEffect, useRef, useState } from "react";
import {
  Animated,
  Image,
  Keyboard,
  KeyboardAvoidingView,
  Modal,
  Platform,
  Text,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View
} from "react-native";

export default function CreatePassword() {
  const router = useRouter();

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [success, setSuccess] = useState(false);

  const scaleAnim = useRef(new Animated.Value(0)).current;
  const isDisabled = password.length < 4;

  useEffect(() => {
    if (confirmPassword && confirmPassword === password) {
      setSuccess(true);

      // Animação do ícone de sucesso
      Animated.spring(scaleAnim, {
        toValue: 1,
        useNativeDriver: true,
        friction: 5,
        tension: 150,
      }).start();

      // Redirecionamento automático
      setTimeout(() => {
        setModalVisible(false);
        router.replace("/(with-login)/home");
      }, 1500);
    }
  }, [confirmPassword]);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        className="flex-1 bg-background"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <View className="flex-1 p-6 items-center justify-center gap-6">
          <View className="w-full items-center">
            <Image
              source={require("../../../assets/images/ilustration-login.png")}
              style={{ width: 260, height: 260 }}
              resizeMode="contain"
            />
            <View className="items-center gap-2 -mt-4">
              <Text className="text-white font-bold text-2xl text-center">
                Criar chave de acesso
              </Text>
              <Text className="text-foreground/80 text-center px-6">
                Defina uma chave de acesso segura para proteger sua conta e garantir acesso rápido ao aplicativo.
              </Text>
            </View>
          </View>

          <View className="w-full gap-4">
            <TextInput
              className="bg-card text-foreground rounded-md h-12 px-4"
              placeholder="Chave de acesso"
              placeholderTextColor="#9CA3AF"
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />

            <TouchableOpacity
              className={`rounded-lg px-6 py-3 items-center ${
                isDisabled ? "bg-primary/60" : "bg-primary"
              }`}
              disabled={isDisabled}
              activeOpacity={0.8}
              onPress={() => setModalVisible(true)}
            >
              <Text className="text-white font-bold text-base">
                Criar chave de acesso
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* ===== MODAL ===== */}
        <Modal
          visible={modalVisible}
          transparent
          animationType="fade"
          statusBarTranslucent
        >
          <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View className="flex-1 bg-black/60 items-center justify-center px-6">
              <View className="bg-foreground w-full rounded-2xl p-6 gap-3">
                {!success ? (
                  <>
                    {/* Cabeçalho: título/descrição à esquerda e X à direita */}
                    <View className="flex-row justify-between items-start">
                      <View className="flex-1 pr-2">
                        <Text className="text-xl font-bold text-background">
                          Confirmar chave de acesso
                        </Text>
                      </View>

                      <TouchableOpacity onPress={() => setModalVisible(false)}>
                        <Feather name="x" size={24} color="#EF4444" />
                      </TouchableOpacity>
                    </View>

                    <TextInput
                      className="bg-white text-background rounded-md h-12 px-4 w-full mt-4"
                      placeholder="Confirmar chave de acesso"
                      placeholderTextColor="#9CA3AF"
                      secureTextEntry
                      value={confirmPassword}
                      onChangeText={setConfirmPassword}
                      autoFocus
                    />
                  </>
                ) : (
                  <View className="items-center justify-center py-6">
                    <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                      <Feather
                        name="check-circle"
                        size={72}
                        color="#F04444"
                      />
                    </Animated.View>
                    <Text className="text-background font-bold text-lg text-center mt-4">
                      Chave criada com sucesso!
                    </Text>
                  </View>
                )}
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
  );
}
