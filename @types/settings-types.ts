import { Feather } from "@expo/vector-icons";
import { ReactNode } from "react";

export type SettingItem = {
  title: string
  icon: keyof typeof Feather.glyphMap
  color: "blue" | "red" | "green" | "yellow" | "orange" | "purple" | "gray"
  description: string
  route: string
}

export type SettingCategory = {
  categoryName: string
  items: SettingItem[]
}

export type Settings = {
  category: SettingCategory[]
}


export type SettingItemProps = {
  title: string
  description: string
  color?: string
  icon: keyof typeof Feather.glyphMap
}
export type SettingViewProps = {
  children: ReactNode
  category: string
}

