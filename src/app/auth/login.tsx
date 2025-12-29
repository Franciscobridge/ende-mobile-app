import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function Login() {
  return (
    <View className="flex-1e p-8">
      {/* HEADER */}
      <View className="w-full flex-row items-start justify-between">
        <Text className="font-bold text-xl w-60">Gerencie sua energia com eficiência</Text>
        <Feather name="info" size={24} />
      </View>

      <View className="w-full mt-28 gap-5">
        <Text className="text-2xl font-bold">Acessar o sistema</Text>
        <View className="gap-5">
          <View className="gap-1.5">
            <Text className="font-medium">ID do cliente</Text>
            <TextInput className="border-2 border-gray-200 rounded-md h-11 px-2.5" />
          </View>
          <View className="gap-1.5">
            <Text className="font-medium">Senha</Text>
            <TextInput className="border-2 border-gray-200 rounded-md h-11 px-2.5" />
          </View>
          <Link href="/(onboarding)" className="font-semiBold">
            Esqueceu a senha?
          </Link>
        </View>
        <TouchableOpacity className="bg-red-600 rounded-md px-6 py-3 items-center" activeOpacity={0.5}>
          <Text className="font-bold text-white">Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
