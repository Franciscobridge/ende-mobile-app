import { useSafeAreaInsets } from "react-native-safe-area-context";


export function useSafeAreaViewHook() {
  const insets = useSafeAreaInsets();
  return {
    safeTopArea: insets.top,
    safeBottomArea: insets.bottom,
    safeLeftArea: insets.left,
    safeRightArea: insets.right
  }
}