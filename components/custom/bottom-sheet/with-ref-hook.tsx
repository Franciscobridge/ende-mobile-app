// BottomSheet
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
// import { useColorHook } from "@/lib/nativewind/useColors";
import { useSafeAreaViewHook } from "@/lib/safe-area-view/use-safe-area-view-hook";
// import { setBorderTopRadius } from "@/constants/app";
// import { useWithRefProps } from "./no-ref-types";

export const useWithRef = () => {
  const backgroundColorBothThemes = "#000", textColorBothThemes = "#000"
  const { safeBottomArea } = useSafeAreaViewHook();

  // const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  // const snapPoints = useMemo(() => [...(snapPointsFromUser ? snapPointsFromUser : [])], [snapPointsFromUser]);

  const backDropComponent = useCallback((props: any) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />, []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);

  return { backgroundColorBothThemes, textColorBothThemes, safeBottomArea, backDropComponent };
};

export function useCustomBottomSheetWithRef(): [React.RefObject<BottomSheetModal | null>, () => void, () => void] {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);

  const handleOpenBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseBottomSheet = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  // return { bottomSheetModalRef, handleOpenBottomSheet, handleCloseBottomSheet };
  return [bottomSheetModalRef, handleOpenBottomSheet, handleCloseBottomSheet];
}
