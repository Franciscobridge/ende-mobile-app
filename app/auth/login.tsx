import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Feather } from "@expo/vector-icons"
import { Link } from "expo-router"
import { useForm } from "react-hook-form"
import { ScrollView, Text, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"

export default function Login() {

  const { theme } = useUniwind()
  const { control, formState: { errors } } = useForm()

  return (
    <View className="flex-1 bg-light-card dark:bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView className="flex-1 px-4">
          <View className="flex-1">
            <View className="w-full mt-28 gap-5">
              <View className="flex-row items-center gap-1.5">
                <View className="p-1.5 bg-primary rounded-lg">
                  <Feather name="log-in" size={25} color="#ffffff" />
                </View>
                <Text className="text-2xl dark:text-white text-light-foreground font-bold">Acessar o sistema</Text>
              </View>
              <View className="gap-5">
                <View className="gap-1.5">
                  <Text className="font-medium dark:text-foreground text-light-foreground">ID do cliente</Text>
                  <Input
                    // @ts-ignore
                    error={errors.clientId?.message}
                    formProps={{
                      name: "clientId",
                      control
                    }}
                    inputProps={{
                      placeholder: "Ex: 224335345634",
                      className: "bg-light-card dark:bg-card text-light-foreground dark:text-foreground rounded-md h-12 px-4 mb-2",
                      placeholderTextColor: theme === "light" ? "#11111150" : "#9CA3AF",
                    }}
                  />
                </View>
                <View className="gap-1.5">
                  <Text className="font-medium dark:text-foreground text-light-foreground">Senha</Text>
                  <Input
                    // @ts-ignore
                    error={errors.password?.message}
                    formProps={{
                      name: "password",
                      control
                    }}
                    inputProps={{
                      placeholder: "***********",
                      className: "bg-light-card dark:bg-card text-light-foreground dark:text-foreground rounded-md h-12 px-4 mb-2",
                      placeholderTextColor: theme === "light" ? "#11111150" : "#9CA3AF",
                      secureTextEntry: true
                    }}
                  />
                </View>
                <Link href="/(onboarding)" className="font-semiBold dark:text-foreground text-light-foreground text-right">
                  Esqueceu a senha?
                </Link>
              </View>
              <Button title="Iniciar Sessão" onPress={() => { }} />
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
