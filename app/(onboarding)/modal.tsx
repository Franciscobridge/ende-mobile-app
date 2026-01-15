import { BottomSheetModalProvider } from '@gorhom/bottom-sheet';
import { Text, TouchableOpacity, View } from 'react-native';
import { CustomBottomSheetNoRef } from "./../../components/custom/bottom-sheet";

export default function ModalBottomShet() {

  return (
    <BottomSheetModalProvider>

      <View>
        {/* <Button title='Abrir bottom Sheet' onPress={()=> Szzz()} /> */}

        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>
        <Text>KKKKKKKKKKKKKKKKKKKK</Text>

        {/* <TouchableOpacity style={{ backgroundColor: "red" }}><Text>Okkkk</Text></TouchableOpacity> */}


        <CustomBottomSheetNoRef
          button={{
            component:
              <TouchableOpacity style={{ backgroundColor: "red" }}>
                <Text>Okkkk</Text>
              </TouchableOpacity>
          }}
          renderContent={() =>
            <View style={{ backgroundColor: "yellow" }}>
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
              <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
              <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
              <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
              <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
              <Text>OOOOOOOOOOOOOOOOOOOOOOOOOO</Text>
            </View>} />


      </View>
    </BottomSheetModalProvider>
  )
}