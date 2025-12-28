import { Text, View } from "react-native";

export function Info({ label, value }: { label: string; value: string }) {
  return (
    <View>
      <Text className="text-card text-xs">{label}</Text>
      <Text className="text-background font-semibold">{value}</Text>
    </View>
  );
}