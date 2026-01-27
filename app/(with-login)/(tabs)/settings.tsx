import { SettingItem } from "@/components/custom/setting-component/item"
import { SettingView } from "@/components/custom/setting-component/view"
import { Input } from "@/components/ui/input"
import { settings } from "@/constants/settings-array"
import { useForm } from "react-hook-form"
import { ScrollView, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
import { useUniwind } from "uniwind"


export default function Settings() {

  const { theme } = useUniwind()
  const { control } = useForm()

  return (
    <View className="flex-1 bg-light-card dark:bg-background">
      <SafeAreaView style={{ flex: 1 }}>
        <ScrollView
          className="flex-1 bg-light-card dark:bg-background px-4"
          contentContainerStyle={{ gap: 15, paddingBottom: 20, marginTop: 10 }}
          showsVerticalScrollIndicator={false}
        >
          <Input
            formProps={{
              name: "search",
              control
            }}
            inputProps={{
              placeholder: "Procurar definição",
              className: "bg-light-background/40 dark:bg-card/20 text-light-foreground dark:text-foreground rounded-full h-12 px-4 mb-2",
              placeholderTextColor: theme === "light" ? "#11111150" : "#9CA3AF",
              returnKeyType: "search"
            }}
          />
          {settings.category.map(category => {
            return (
              <SettingView key={category.categoryName} category={category.categoryName}>
                {category.items.map(item => {
                  return (
                    <SettingItem
                      key={item.title}
                      title={item.title}
                      description={item.description}
                      icon={item.icon}
                      color={item.color}
                    />
                  )
                })}
              </SettingView>
            )
          })}

        </ScrollView>
      </SafeAreaView>
    </View>
  )
}
