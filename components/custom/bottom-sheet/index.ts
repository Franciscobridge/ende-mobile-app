import { use, useCallback, useRef } from "react";
import { CustomBottomSheetNoRef } from "./no-ref";
import { CustomBottomSheetWithRef } from "./with-ref";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { useCustomBottomSheetWithRef } from "./with-ref-hook";

export { CustomBottomSheetNoRef, CustomBottomSheetWithRef };
export { useCustomBottomSheetWithRef };

// Usage:   const [reff, openFnn, closeFnn] = useCustomBottomSheetWithRef();
