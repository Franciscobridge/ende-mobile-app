// BottomSheet
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCallback, useRef } from "react";
import { useSafeAreaViewHook } from "../../../lib/safe-area-view/use-safe-area-view-hook";
// import { useColorHook } from "@/lib/nativewind/useColors";

// import { setBorderTopRadius } from "@/constants/app";
// import { UseNoRefProps } from "./no-ref-types";

export const useNoRef = () => {
  // const { backgroundColorBothThemes, textColorBothThemes } = useColorHook();
  const { safeBottomArea } = useSafeAreaViewHook();
  const setBorderTopRadius = 16

  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // const snapPoints = useMemo(() => [...(snapPointsFromUser ? snapPointsFromUser : [])], [snapPointsFromUser]);

  const handlePresentModalPress = useCallback(() => {
    bottomSheetModalRef.current?.present();
  }, []);

  const handleCloseModalPress = useCallback(() => {
    bottomSheetModalRef.current?.dismiss();
  }, []);

  const backDropComponent = useCallback((props: any) => <BottomSheetBackdrop {...props} appearsOnIndex={0} disappearsOnIndex={-1} />, []);

  // const handleSheetChanges = useCallback((index: number) => {
  //   console.log("handleSheetChanges", index);
  // }, []);



  return { bottomSheetModalRef, safeBottomArea, backDropComponent, setBorderTopRadius, handlePresentModalPress, handleCloseModalPress };
};
