import { ElementType } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";


export type CustomNotificationProps = {
  ref: React.RefObject<BottomSheetModal | null>;
  handleClose: () => void;
  notification: NotificationType;
};


export type NotificationType = {
  title?: string;
  message?: string;
  type?: "info" | "success" | "error" | "warning";
  Icon?: ElementType;
  hideIcon?: boolean;
};
export type NotificationProps = {
  notification?: NotificationType;
  handleClose?: () => void;
  closeButtonLabel?: string;
}

