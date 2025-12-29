import { Info } from '@/components/custom/info-modal';
import { Button } from '@/components/ui/button';
import { FancySpinner } from '@/components/ui/fancySpinner';
import { Feather } from '@expo/vector-icons';
import { Link, useRouter } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { Fragment, useState } from 'react';
import { Image, KeyboardAvoidingView, Modal, Platform, ScrollView, Text, TextInput, View } from 'react-native';

export default function VerifyContract() {
  const [numberContract, setNumberContract] = useState('');
  const [isDialogVisible, setIsDialogVisible] = useState(false);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const isDisabled = numberContract.trim() === '';

  const contractData = {
    name: 'Manuel Sousa',
    email: 'manuel@email.com',
    phone: '+244 923 456 789',
    address: 'Rua Principal, Nº 45, Luanda',
  };

  function handleVerify() {
    setIsDialogVisible(true);
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
    }, 1800);
  }

  function handleConfirm() {
    setIsDialogVisible(false);
    router.push('/(onboarding)/scannerBarCode');
  }

  return (
    <Fragment>
      <KeyboardAvoidingView className="flex-1 bg-background" behavior={Platform.OS === 'ios' ? 'padding' : undefined}>
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
              source={require('../../../assets/images/logo.png')}
              style={{ width: 360, height: 200 }}
              resizeMode="contain"
            />

            <Text className="text-white font-bold absolute bottom-12 left-12 text-2xl">APP</Text>
          </View>

          <View className="flex-1 justify-end">
            <View className="bg-foreground w-full rounded-t-3xl p-6 gap-10 grow">
              <View className="flex-row items-center gap-3">
                <View className="bg-primary p-3 rounded-lg">
                  <Feather name="user" size={25} color="#ffffff" />
                </View>

                <View className="flex-1">
                  <Text className="text-xl font-bold text-background">Verificar Contrato</Text>
                  <Text className="text-card/65 -mt-1">Insira o número do seu contrato ENDE.</Text>
                </View>
              </View>

              <View className="gap-4">
                <View className="gap-1.5">
                  <Text className="font-bold text-background">Número de contrato</Text>
                  <TextInput
                    className="bg-white text-background rounded-md h-11 px-3"
                    placeholder="Ex: 224144253363"
                    placeholderTextColor="#9CA3AF"
                    keyboardType="numeric"
                    value={numberContract}
                    onChangeText={setNumberContract}
                  />
                </View>

                <Button onPress={handleVerify} title="Verificar" disabled={isDisabled} />

                <Link href="/(onboarding)/infoCreateAccount" className="text-right text-primary font-medium">
                  Criar um contrato ENDE
                </Link>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>

      <Modal visible={isDialogVisible} transparent animationType="fade" statusBarTranslucent>
        <View className="flex-1 bg-black/70 items-center justify-center px-6">
          <View className="bg-foreground w-full rounded-2xl p-6 gap-5">
            <Text className="text-xl font-bold text-background text-center">Dados do Contrato</Text>

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
                  <Button onPress={() => setIsDialogVisible(false)} title="Cancelar" variant="outline" />
                  <Button onPress={handleConfirm} title="Confirmar" />
                </View>
              </>
            )}
          </View>
        </View>
      </Modal>
    </Fragment>
  );
}
