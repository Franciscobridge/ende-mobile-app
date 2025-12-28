import { Info } from "@/components/custom/info-modal";
import { FancySpinner } from "@/components/ui/fancySpinner";
import { Feather } from "@expo/vector-icons";
import { Link, useRouter } from "expo-router";
import { StatusBar } from "expo-status-bar";
import { Fragment, useState } from "react";
import {
  Image,
  KeyboardAvoidingView,
  Modal,
  Platform,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function VerifyContract() {
  const [numberContract, setNumberContract] = useState("");
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isDisabled = numberContract.trim() === "";

  const contractData = {
    name: "Manuel Sousa",
    email: "joao@email.com",
    phone: "+244 923 456 789",
    address: "Rua Principal, Nº 45, Luanda"
  };

  return (
    <Fragment>
      <KeyboardAvoidingView
        className="flex-1 bg-background"
        behavior={Platform.OS === "ios" ? "padding" : undefined}
      >
        <StatusBar backgroundColor="#111111" translucent style="dark" />

        <ScrollView
          className="flex-1"
          contentContainerStyle={{ flexGrow: 1 }}
          keyboardShouldPersistTaps="handled"
          bounces={false}
          overScrollMode="never"
          showsVerticalScrollIndicator={false}
        >

          <View className="relative mt-24 items-center justify-center">
            <Image
              source={require("../../../assets/images/logo.png")}
              style={{ width: 360, height: 200 }}
              resizeMode="contain"
            />

            <Text className="text-white font-bold absolute bottom-12 left-12 text-2xl">
              APP
            </Text>
          </View>

          <View className="flex-1 justify-end">
            {/* Card */}
            <View className="bg-foreground w-full rounded-t-3xl p-6 gap-10 grow">
              {/* Cabeçalho */}
              <View className="flex-row items-center gap-3">
                <View className="bg-primary p-3 rounded-lg">
                  <Feather name="user" size={25} color="#ffffff" />
                </View>

                <View className="flex-1">
                  <Text className="text-xl font-bold text-background">
                    Verificar Contrato
                  </Text>
                  <Text className="text-card/65 -mt-1">
                    Insira o número do seu contrato ENDE.
                  </Text>
                </View>
              </View>

              {/* Formulário */}
              <View className="gap-4">
                <View className="gap-1.5">
                  <Text className="font-bold text-background">
                    Número de contrato
                  </Text>
                  <TextInput
                    className="bg-white text-background rounded-md h-11 px-3"
                    placeholder="Ex: 224144253363"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="numeric"
                    value={numberContract}
                    onChangeText={setNumberContract}
                  />
                </View>

                <TouchableOpacity
                  onPress={() => {
                    setIsDialogVisible(true);
                    setLoading(true);

                    setTimeout(() => {
                      setLoading(false);
                    }, 1800);
                  }}

                  className={`rounded-lg px-6 py-3 items-center ${isDisabled ? "bg-primary/60" : "bg-primary"
                    }`}
                  activeOpacity={0.7}
                  disabled={isDisabled}
                >
                  <Text className="text-white font-bold text-base">
                    Verificar
                  </Text>
                </TouchableOpacity>

                <Link
                  href="/"
                  className="text-right text-primary font-medium"
                >
                  Criar um contrato ENDE
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal
        visible={isDialogVisible}
        transparent
        animationType="fade"
        statusBarTranslucent
      >
        <View className="flex-1 bg-black/80 items-center justify-center px-6">
          <View className="bg-foreground w-full rounded-2xl p-6 gap-5">
            <Text className="text-xl font-bold text-background text-center">
              Dados do Contrato
            </Text>

            {/* Informações do contrato*/}
            {loading ? (
              <FancySpinner />
            ) : (
              <>
                <View className="gap-3">
                  <Info label="Nome" value={contractData.name} />
                  <Info label="Email" value={contractData.email} />
                  <Info label="Telefone" value={contractData.phone} />
                  <Info label="Endereço" value={contractData.address} />
                </View>

                <View className="flex-row gap-3 mt-4">
                  <TouchableOpacity
                    onPress={() => setIsDialogVisible(false)}
                    className="flex-1 border border-card rounded-lg py-3 items-center"
                  >
                    <Text className="text-card font-bold">Cancelar</Text>
                  </TouchableOpacity>

                  <TouchableOpacity
                    onPress={() => {
                      setIsDialogVisible(false);
                      router.push("/(onboarding)/scannerBarCode");
                    }}
                    className="flex-1 bg-primary rounded-lg py-3 items-center"
                  >
                    <Text className="text-white font-bold">Confirmar</Text>
                  </TouchableOpacity>
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </Fragment>
  );
}



