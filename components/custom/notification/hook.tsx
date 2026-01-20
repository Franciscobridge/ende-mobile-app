import { useCallback, useRef, useState } from "react";
import { BottomSheetModal } from "@gorhom/bottom-sheet";
import { NotificationType } from "./types";

export function useCustomNotification() {
  const [notification, setNotification] = useState<NotificationType>({});
  const customNotificationRef = useRef<BottomSheetModal>(null);

  const handleOpenNotification = useCallback((notification: NotificationType) => {
    setNotification(notification);
    customNotificationRef.current?.present();
  }, []);

  const handleCloseNotification = useCallback(() => {
    customNotificationRef.current?.dismiss();
  }, []);

  return { customNotificationRef, notification, handleOpenNotification, handleCloseNotification };
}
