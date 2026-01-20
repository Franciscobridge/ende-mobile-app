import { View } from "react-native";
import { CustomBottomSheetWithRef } from "@/components/custom/bottom-sheet";
import { CustomNotificationProps } from "./types";
import { Notification } from "./notification-body";

export function CustomNotification({ ref, notification, handleClose }: CustomNotificationProps) {
  return (
    <View>
      <CustomBottomSheetWithRef
        renderContent={() => <Notification notification={notification} handleClose={handleClose} />}
        bottomSheetModalRef={ref}
      />
    </View>
  );
}
