import { ElementType } from "react";
import { StyleProp, ViewStyle } from "react-native";

export type ModalHeaderProps = {
  indicatorStyle?: StyleProp<ViewStyle>;
  // borderTopRadius?: number;
  component?: ElementType | null;
};

export type ModalBodyProps = {
  borderTopRadius?: number;
};

export type ModalProps = {
  // renderContent: ElementType;
  // snapPoints?: SnapPointsType;
  // snapPoints?: (string | number)[];
  onDismiss?: () => void;
  backgroundColor?: string;
  enablePanDownToClose?: boolean;
  enableSafePaddingBottom?: boolean;
};