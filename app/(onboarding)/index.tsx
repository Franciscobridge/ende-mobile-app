import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components/ui/button'
import { FancySpinner } from '../../components/ui/fancy-spinner'


export default function Index() {

  const router = useRouter()

  return (
    <View className='flex-1 bg-light-background dark:bg-background'>
      <SafeAreaView style={{ flex: 1 }}>
        <View className='flex-1 items-center justify-center gap-3.5'>
          <FancySpinner title='Carregando...' />
          <Button title='Avançar' onPress={() => router.push("/(onboarding)/modal")} />
        </View>
      </SafeAreaView>
    </View>
  )
}