import { Dispatch, SetStateAction } from "react";
import { Modal, Text, View } from "react-native";
import { Button } from "../../../components/ui/button";
import { FancySpinner } from "../../../components/ui/fancy-spinner";
import { Info } from "./info-modal";

type ModalProps = {
  isDialogVisible: boolean
  setIsDialogVisible: Dispatch<SetStateAction<boolean>>
  loading: boolean
  contractData: {
    name: string
    email: string
    phone: string
    address: string
  }
  handleConfirm: () => void
}

export function ModalVerifyContract({ isDialogVisible, contractData, loading, handleConfirm, setIsDialogVisible }: ModalProps) {
  return (
    <Modal visible={isDialogVisible} transparent animationType="fade" statusBarTranslucent>
      <View className="flex-1 bg-black/70 items-center justify-center px-6">
        <View className="bg-foreground w-full rounded-2xl p-6 gap-5">
          <Text className="text-xl font-bold text-background text-center">Dados do Contrato</Text>

          {loading ? (
            <FancySpinner title="A verificar informações..." />
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
  )
}