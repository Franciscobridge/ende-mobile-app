import { Text, TouchableOpacity } from "react-native"

type Variant = "primary" | "outline"

type ButtonProps = {
  disabled?: boolean
  onPress: () => void
  title: string
  variant?: Variant
}

export function Button({ disabled, onPress, title, variant = "primary" }: ButtonProps) {
  return (
    <TouchableOpacity
      className={
        variant === "primary"
          ? `rounded-lg px-6 py-3 items-center ${disabled ? "bg-primary/60" : "bg-primary"}`
          : `flex-1 border border-card rounded-lg py-3 items-center`
      }
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disabled}
    >
      <Text className={variant === "primary" ? `text-foreground font-bold` : `text-card font-bold`}>{title}</Text>
    </TouchableOpacity>
  )
}
