import { useEffect, useState } from "react"
import { Text, View } from "react-native"
import { LineChart, lineDataItem } from "react-native-gifted-charts"

type EnergyLineChartProps = {
  data: lineDataItem[]
}

export function HistoryLineChart({ data }: EnergyLineChartProps) {

  const date = new Date()
  useEffect(() => {
    setHourChart(String(date.getHours()))
  }, []);

  const [width, setWidth] = useState<number>()
  const [hourChart, setHourChart] = useState("")
  return (

    <View className="bg-light-background/40 dark:bg-card/20 w-full h-42 rounded-lg p-3">
      <View className="flex-row items-end justify-between">
        <View>
          <Text className="font-bold text-light-foreground dark:text-white z-10">Histórico de consumo</Text>
          <Text className="text-primary font-sans dark:text-green-400 -mt-0.5 z-10">Hoje</Text>
        </View>
        <View className="px-1.5">
          <Text className="dark:text-white font-sans text-xs"><Text className="text-green-400">Tempo:</Text> {hourChart}h/w</Text>
        </View>
      </View>
      <View onLayout={(event) => { setWidth(event.nativeEvent.layout.width) }} className="justify-start items-start flex-1 -ml-5 overflow-hidden mt-2.5">
        <LineChart
          areaChart
          curved
          data={data}
          width={width}
          height={90}
          isAnimated
          thickness={2}
          rulesType="solid"
          noOfSections={4}
          spacing={13.1}
          initialSpacing={0}
          color1="#05df72"
          hideDataPoints
          startFillColor1="#05df72"
          startOpacity={0.4}
          endOpacity={0.1}
          maxValue={5}
          yAxisThickness={0}
          xAxisColor="#99999950"
          adjustToWidth
          bounces
          yAxisTextStyle={{ color: "#05df72", fontSize: 11, marginRight: -15 }}
          rulesColor="#99999950"
          // hideRules
          pointerConfig={{
            pointerStripHeight: 80,
            pointerStripColor: "#05df72",
            pointerStripWidth: 2,
            pointerColor: "#05df72",
            radius: 6,
            pointerLabelHeight: 90,
            pointerLabelWidth: 100,
            activatePointersOnLongPress: true,
            autoAdjustPointerLabelPosition: false,
            //@ts-ignore
            pointerLabelComponent: item => { setHourChart(item[0].hour) }
          }}
          disableScroll
        />
      </View>
    </View>
  )
}
