import { Button } from '@/components/ui/button'
import { FancySpinner } from '@/components/ui/fancy-spinner'
import { useRouter } from 'expo-router'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'


export default function Index() {

  // const [firstAccess, setFirstAccess] = useState(false)
  const router = useRouter()
  // useEffect(() => {
  //   if (!firstAccess) {
  //     router.navigate("/auth/login");
  //   } else if (firstAccess) {
  //     router.navigate("/(onboarding)/initial")
  //   }
  // }, [])

  return (
    <View className='flex-1 bg-light-background dark:bg-background'>
      <SafeAreaView style={{ flex: 1 }}>
        <View className='flex-1 items-center justify-center gap-3.5'>
          <FancySpinner title='Carregando...' />
          <Button title='Avançar' onPress={() => router.push("/(onboarding)/initial")} />
        </View>
      </SafeAreaView>
    </View>
  )
}