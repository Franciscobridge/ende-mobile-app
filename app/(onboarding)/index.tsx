// import { CustomNotification, useCustomNotification } from '@/components/custom/notification'
import { useRouter } from 'expo-router'
// import { Mail } from 'lucide-react-native'
import { View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Button } from '../../components/ui/button'
import { FancySpinner } from '../../components/ui/fancy-spinner'


export default function Index() {

  const router = useRouter()
  // const { handleCloseNotification, handleOpenNotification, customNotificationRef } = useCustomNotification()

  return (
    <View className='flex-1 bg-light-background dark:bg-background'>
      <SafeAreaView style={{ flex: 1 }}>
        <View className='flex-1 items-center justify-center gap-3.5'>
          <FancySpinner title='Carregando...' />
          <Button title='Avançar' onPress={() => router.push("/(with-login)/(tabs)/home")} />
          {/* <Button title='Avançar' onPress={() => handleOpenNotification} /> */}
        </View>
        {/* <CustomNotification ref={customNotificationRef}
          notification={{
            title: "Senha incorreta",
            Icon: Mail,
            hideIcon: true,
            message: "A senha que inseriu está incorreta.",
            type: "error"
          }}
          handleClose={handleCloseNotification}
        /> */}
      </SafeAreaView>
    </View>
  )
}