import { BottomSheetModal, BottomSheetView } from "@gorhom/bottom-sheet";
import { useWithRef } from "./with-ref-hook";
import { WithRefProps } from "./with-ref-types";

export function CustomBottomSheetWithRef({ renderContent: Component, modalProps, modalBodyProps, modalHeaderProps, bottomSheetModalRef }: WithRefProps) {
  const { backDropComponent, backgroundColorBothThemes, safeBottomArea, textColorBothThemes } = useWithRef();

  // const snapPoints =  useMemo(() => ["70%", "100%"], []);
  // useEffect(() => {
  // bottomSheetModalRef.current?.snapToIndex(1)
  // }, []);

  return (
    <BottomSheetModal
      backgroundStyle={{ backgroundColor: modalProps?.backgroundColor || backgroundColorBothThemes }}
      ref={bottomSheetModalRef}
      onDismiss={modalProps?.onDismiss}
      // snapPoints={modalProps?.snapPoints}
      // snapPoints={["70%"]}
      // index={1}
      backdropComponent={backDropComponent}
      handleIndicatorStyle={{ backgroundColor: textColorBothThemes, ...(modalHeaderProps?.indicatorStyle as object) }}
      handleComponent={modalHeaderProps?.component ? () => <>{modalHeaderProps.component && <modalHeaderProps.component />}</> : undefined}
      // handleStyle={{...setBorderTopRadius(modalHeaderProps?.borderTopRadius) }}
      enablePanDownToClose={modalProps?.enablePanDownToClose}
    // enableDismissOnClose={false}
    >
      {/* <KeyboardAvoidingView behavior={Platform.OS === "ios" ? "padding" : "height"} style={{ flex: 1 }}> */}
      <BottomSheetView
        style={{
          backgroundColor: modalProps?.backgroundColor || backgroundColorBothThemes,
          paddingBottom: modalProps?.enableSafePaddingBottom ? safeBottomArea : 0,
          borderTopRightRadius: 16,
          borderTopLeftRadius: 16
        }}
      >
        <Component />
      </BottomSheetView>
      {/* </KeyboardAvoidingView> */}
    </BottomSheetModal>
  );
}
