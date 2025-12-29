import { EnergyUsageIndicator } from '@/components/custom/energy-usage-indicator';
import { EnergyLineChart } from '@/components/custom/line-chart';
import { Feather } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { useEffect, useState } from 'react';
import { ScrollView, Text, TouchableOpacity, View } from 'react-native';

export default function Home() {
  const router = useRouter();
  const [consumption, setConsumption] = useState(65);
  const remainingBalance = 55.5;

  useEffect(() => {
    const interval = setInterval(() => {
      setConsumption(Math.floor(50 + Math.random() * 40));
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return (
    <ScrollView className="flex-1 bg-background">
      <View className="flex-1 bg-background gap-5">
        <View className="flex-row items-center justify-between px-6 pt-8">
          <View className="flex-row gap-1.5">
            <Feather name="home" size={25} color="#F04444" />
            <Text className="font-bold text-white text-xl">Painel Central</Text>
          </View>
          <View className="bg-card/30 p-3 rounded-full">
            <Feather name="bell" size={20} color="#E9E9E9" />
          </View>
        </View>
        <View className="w-full px-6 items-center">
          <View className="w-full h-36 bg-card/20 rounded-lg p-3 flex-row items-center justify-between">
            <View className="gap-8">
              <Text className="text-xl font-bold text-white">Saldo restante</Text>
              <View className="flex-row items-baseline gap-1">
                <Text className={`font-bold ${remainingBalance >= 20 ? 'text-green-400' : 'text-primary'} text-5xl`}>
                  {remainingBalance}
                </Text>
                <Text className="font-semiBold text-foreground text-xs">Kwh</Text>
              </View>
            </View>
            <EnergyUsageIndicator />
          </View>
        </View>
        <View className="flex-row w-full items-center justify-between px-6">
          <TouchableOpacity
            activeOpacity={0.5}
            className="size-24 bg-green-400/5 rounded-lg items-center gap-1.5 justify-center"
          >
            <Feather name="zap" size={29} color="#32E041" />
            <Text className="text-white text-xs font-bold text-center ">Consumo instantâneo</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            className="size-24 bg-green-400/5 rounded-lg items-center justify-center gap-1.5"
          >
            <Feather name="clock" size={29} color="#32E041" />
            <Text className="text-white font-bold text-xs text-center">Término previsto</Text>
          </TouchableOpacity>
          <TouchableOpacity
            activeOpacity={0.5}
            className="size-24 bg-blue-500/10 rounded-lg items-center justify-center gap-1.5"
          >
            <Feather name="credit-card" size={29} color="#447DF7" />
            <Text className="text-white font-bold  text-xs text-center ">Recarregar Energia</Text>
          </TouchableOpacity>
        </View>
        {/* <View className="w-full px-6">
          <Button onPress={() => router.push('/(with-login)/home')} title="Recarregar" />
        </View> */}
        <View className="w-full px-6">
          <View className="bg-card/20 overflow-hidden w-full h-36 rounded-lg p-3">
            <View>
              <Text className="font-bold text-white z-10">Histórico de consumo</Text>
              <Text className="text-green-400 -mt-0.5 z-10">Hoje</Text>
            </View>
            <EnergyLineChart />
          </View>
        </View>
        <View className="w-full px-6 gap-2">
          <View className="bg-card/20 w-full h-14 rounded-lg"></View>
        </View>
      </View>
    </ScrollView>
  );
}
