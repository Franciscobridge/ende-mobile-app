import { Button } from "@/components/ui/button";
import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Text, View } from 'react-native';

export default function ModalBottomShet() {



  return (
    <BottomSheetModalProvider>

      <View>
        {/* <Button title='Abrir bottom Sheet' onPress={()=> Szzz()} /> */}

        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>

        {/* <TouchableOpacity style={{ backgroundColor: "red" }}><Text>Okkkk</Text></TouchableOpacity> */}
        <AAAA />

      </View>
    </BottomSheetModalProvider>
  )
}












import { CustomBottomSheetWithRef, useCustomBottomSheetWithRef } from "./../../components/custom/bottom-sheet";

function AAAA() {

  const [bottomSheetModalRef, handleOpenBottomSheet, handleCloseBottomSheet] = useCustomBottomSheetWithRef()

  return (
    <View >

      <Text>KKKKKKKKKK</Text>
      <Text>KKKKKKKKKK</Text>
      <Text>KKKKKKKKKK</Text>

      <Button title='Abrir' onPress={handleOpenBottomSheet} />

      <CustomBottomSheetWithRef
        bottomSheetModalRef={bottomSheetModalRef}
        modalHeaderProps={{ component: () => <View style={{ backgroundColor: "red" }}><Text>AAAAA</Text></View> }}
        renderContent={() =>

          <View style={{ backgroundColor: "yellow" }}>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Button title='Fechar' onPress={() => {
              // kkkkkkkkkkk

              handleCloseBottomSheet()
            }} />
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
          </View>
        }

      />


    </View>


  )
}