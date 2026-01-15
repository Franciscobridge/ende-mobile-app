import { Feather } from "@expo/vector-icons"
import { useRouter } from "expo-router"
import { Image, ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"
import { Button } from "../../components/ui/button"

export default function InfoCreateAccount() {

  const { theme } = useUniwind()

  const router = useRouter()
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <ScrollView showsVerticalScrollIndicator={false} className="flex-1 bg-light-background dark:bg-background px-5">
        {/* Cabeçalho */}
        <View className="items-start mb-12">
          {theme === "light" ? (
            <Image
              source={require("../../assets/images/logo-light.png")}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          ) : (
            <Image
              source={require("../../assets/images/logo-dark.png")}
              style={{ width: 120, height: 120 }}
              resizeMode="contain"
            />
          )}
          <Text className="text-light-foreground dark:text-foreground font-bold text-lg -mt-6">Empresa Nacional Distribuidora de Energia</Text>
        </View>

        <Text className="text-background dark:text-white font-sans mb-8">
          Se ainda não possui um contrato com a ENDE, siga os passos abaixo:
        </Text>

        <View className="flex-row items-start gap-4 bg-muted p-4 rounded-lg mb-4">
          <View className="w-14 h-14 bg-primary/10 dark:bg-card rounded-full items-center justify-center">
            <Feather name="file-plus" size={24} color={theme === "light" ? "#D40000" : "#fff"} />
          </View>
          <View className="flex-1">
            <Text className="text-light-foreground dark:text-white font-bold mb-1">1. Documentos necessários</Text>
            <Text className="text-light-foreground/90 dark:text-foreground/80 text-xs leading-relaxed">
              Bilhete de Identidade, NIF, comprovativo de residência, declaração de posse ou contrato de arrendamento do
              imóvel.
            </Text>
          </View>
        </View>

        <View className="flex-row items-start gap-4 bg-muted p-4 rounded-lg mb-4">
          <View className="w-14 h-14 bg-primary/10 dark:bg-card rounded-full items-center justify-center">
            <Feather name="map-pin" size={24} color={theme === "light" ? "#D40000" : "#fff"} />
          </View>
          <View className="flex-1">
            <Text className="text-light-foreground dark:text-white font-bold mb-1">2. Dirija-se ao posto da ENDE</Text>
            <Text className="text-light-foreground/90 dark:text-foreground/80 text-xs leading-relaxed">
              Leve os documentos até o posto de atendimento da ENDE mais próximo ou ao Guiché Único da Empresa.
            </Text>
          </View>
        </View>

        <View className="flex-row items-start gap-4 bg-muted p-4 rounded-lg mb-4">
          <View className="w-14 h-14 bg-primary/10 dark:bg-card rounded-full items-center justify-center">
            <Feather name="edit-3" size={24} color={theme === "light" ? "#D40000" : "#fff"} />
          </View>
          <View className="flex-1">
            <Text className="text-light-foreground dark:text-white font-bold mb-1">3. Preenchimento do formulário</Text>
            <Text className="text-light-foreground/90 dark:text-foreground/80 text-xs leading-relaxed">
              Preencha o formulário de solicitação de ligação elétrica com os dados do imóvel e do titular.
            </Text>
          </View>
        </View>

        <View className="flex-row items-start gap-4 bg-muted p-4 rounded-lg">
          <View className="w-14 h-14 bg-primary/10 dark:bg-card rounded-full items-center justify-center">
            <Feather name="credit-card" size={24} color={theme === "light" ? "#D40000" : "#fff"} />
          </View>
          <View className="flex-1">
            <Text className="text-light-foreground dark:text-white font-bold mb-1">4. Pagamento da taxa</Text>
            <Text className="text-light-foreground/90 dark:text-foreground/80 text-xs leading-relaxed">
              Após a aprovação, efetue o pagamento da taxa de ligação para que o contrato seja formalizado.
            </Text>
          </View>
        </View>
        <View className="my-6">
          <Button variant="primary" title="Voltar" onPress={() => router.back()} />
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}
