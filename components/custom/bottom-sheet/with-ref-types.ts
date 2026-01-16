import { ElementType } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { ModalBodyProps, ModalHeaderProps, ModalProps } from "./types";

export type WithRefProps = {
  renderContent: ElementType;
  modalProps?: ModalProps;
  //   button: BottonTypeOfButtonSheetType
  modalHeaderProps?: ModalHeaderProps;
  modalBodyProps?: ModalBodyProps;
  bottomSheetModalRef: React.RefObject<BottomSheetModal | null>;
};

// type SnapPointsType = (string | number)[] | SharedValue<(string | number)[]>;