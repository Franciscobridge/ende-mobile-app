import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { TouchableOpacity } from "react-native";
import { useNoRef } from "./no-ref-hook";
import { NoRefProps } from "./no-ref-types";

export function CustomBottomSheetNoRef({ renderContent: Component, modalProps, modalBodyProps, modalHeaderProps, button }: NoRefProps) {
  const {
    bottomSheetModalRef,
    handlePresentModalPress,
    handleCloseModalPress,
    backDropComponent,
    backgroundColorBothThemes,
    safeBottomArea,
    textColorBothThemes,
  } = useNoRef();

  return (
    <>
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}> */}
      <TouchableOpacity onPress={handlePresentModalPress} activeOpacity={button.activeOpacity || 0.7}>
        {button.component}
      </TouchableOpacity>

      <BottomSheetModal
        backgroundStyle={{ backgroundColor: modalProps?.backgroundColor || backgroundColorBothThemes }}
        ref={bottomSheetModalRef}
        onDismiss={modalProps?.onDismiss}
        // snapPoints={modalProps?.snapPoints}
        backdropComponent={backDropComponent}
        handleIndicatorStyle={{ backgroundColor: textColorBothThemes, ...(modalHeaderProps?.indicatorStyle as object) }}
        handleComponent={modalHeaderProps?.component ? () => <>{modalHeaderProps.component && <modalHeaderProps.component />}</> : undefined}
        // handleStyle={{ backgroundColor: modalProps?.backgroundColor || backgroundColorBothThemes, ...setBorderTopRadius(modalHeaderProps?.borderTopRadius) }}
        enablePanDownToClose={modalProps?.enablePanDownToClose}
      // enableDismissOnClose={false}
      >
        <BottomSheetView
          style={{
            backgroundColor: modalProps?.backgroundColor || backgroundColorBothThemes,
            paddingBottom: safeBottomArea,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16
          }}
        >
          <Component />
        </BottomSheetView>
      </BottomSheetModal>
      {/* </KeyboardAvoidingView> */}
    </>
  );
}
