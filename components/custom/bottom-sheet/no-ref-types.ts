import { ElementType, JSX } from "react";
// import { BottonTypeOfButtonSheetType } from "../action-sheet/types";
import { ModalBodyProps, ModalHeaderProps, ModalProps } from "./types";

type BottonTypeOfButtonSheetType = {
  activeOpacity?: number;
  component: JSX.Element;
  // component: ReactElement<TouchableOpacityProps>
};

export type NoRefProps = {
  renderContent: ElementType;
  modalProps?: ModalProps;
  button: BottonTypeOfButtonSheetType;
  modalHeaderProps?: ModalHeaderProps;
  modalBodyProps?: ModalBodyProps;
};

// export type UseNoRefProps = {
//   snapPoints?: SnapPointsType
// }

// type SnapPointsType = (string | number)[] | SharedValue<(string | number)[]>;
