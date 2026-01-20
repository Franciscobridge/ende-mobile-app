import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import { BadgeCheckIcon, BadgeInfoIcon, BadgeXIcon, TriangleAlertIcon } from "lucide-react-native";
import { useColorHook } from "@/lib/nativewind/useColors";
import { NotificationProps } from "./types";

export const Notification = ({ closeButtonLabel, handleClose, notification }: NotificationProps) => {
  const { textColorBothThemes, IconGrayColorForBothTheme } = useColorHook();
  const defaultNotification = getBackNotificationInformation(notification?.type);

  return (
    <View style={styles.container}>
      <View style={{ marginBottom: 12 }}>
        {!notification?.hideIcon &&
          (notification?.Icon ? <notification.Icon /> : <defaultNotification.Icon fill={defaultNotification.color} color={defaultNotification.secondColor} size={55} />)}
      </View>
      <View className="w-full justify-center items-center">
        <Text style={{ fontWeight: "bold", color: textColorBothThemes, fontSize: 18, marginBottom: 4, textAlign: "center" }}>
          {notification?.title || defaultNotification.title}
        </Text>
        <Text style={{ color: IconGrayColorForBothTheme, fontSize: 14, marginBottom: 24, textAlign: "center", padding: 8 }}>
          {notification?.message || defaultNotification.message}
        </Text>
      </View>
      <TouchableOpacity activeOpacity={0.7} style={styles.closeButton} onPress={handleClose}>
        <Text style={styles.closeButtonText}>{closeButtonLabel || "Fechar"}</Text>
      </TouchableOpacity>
    </View>
  );
};

const getBackNotificationInformation = (type: string | undefined) => {
  switch (type) {
    case "success":
      return {
        title: "Sucesso",
        message: "Operação realizada com sucesso!",
        Icon: BadgeCheckIcon,
        color: "#4CAF50",
        secondColor: "#d1e7dd",
      };
    case "error":
      return {
        title: "Erro",
        message: "Ocorreu um erro ao realizar a operação.",
        Icon: BadgeXIcon,
        color: "#F44336",
        secondColor: "#f8d7da",
      };
    case "warning":
      return {
        title: "Atenção",
        message: "Esta é uma mensagem de aviso.",
        Icon: TriangleAlertIcon,
        color: "#FFC107",
        secondColor: "#fff3cd",
      };
    default:
      return {
        title: "Informação",
        message: "Esta é uma mensagem de informação.",
        Icon: BadgeInfoIcon,
        color: "#2196F3",
        secondColor: "#cce5ff",
      };
  }
};

const styles = StyleSheet.create({
  container: { padding: 20, paddingVertical: 20, justifyContent: "center", alignItems: "center" },
  closeButton: {
    backgroundColor: "#2563eb",
    padding: 16,
    borderRadius: 12,
    alignItems: "center",
    width: "100%",
  },
  closeButtonText: {
    color: "#fff",
    fontSize: 16,
    lineHeight: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
