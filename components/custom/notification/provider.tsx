import React, { createContext, useContext, ReactNode } from "react";
import { BottomSheetModal, BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import { useCustomNotification } from "./hook";
import { NotificationType } from "./types";
import { CustomNotification } from "./notification";
import { View } from "react-native";

type CustomNotificationContextType = {
  customNotificationRef: React.RefObject<BottomSheetModal | null>;
  notification: NotificationType;
  handleOpenNotification: (notification: NotificationType) => void;
  handleCloseNotification: () => void;
};

const CustomNotificationContext = createContext<CustomNotificationContextType | undefined>(undefined);

export const useCustomNotificationContext = (): CustomNotificationContextType => {
  const context = useContext(CustomNotificationContext);

  if (context === undefined) {
    throw new Error("useCustomNotificationContext deve ser usado dentro de CustomNotificationProvider");
  }

  return context;
};

export const CustomNotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { customNotificationRef, handleCloseNotification, handleOpenNotification, notification } = useCustomNotification();

  const contextValue: CustomNotificationContextType = { notification, handleOpenNotification, handleCloseNotification, customNotificationRef };

  return (
    <BottomSheetModalProvider>

    <View style={{ flex: 1 }}>
      <CustomNotificationContext.Provider value={contextValue}>
        {children}
        <CustomNotification ref={customNotificationRef} notification={notification} handleClose={handleCloseNotification} />
      </CustomNotificationContext.Provider>
    </View>
    </BottomSheetModalProvider>
  );
};
