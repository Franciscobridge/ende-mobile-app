import { LineChart } from "react-native-chart-kit"

// const width = Dimensions.get("window").width

export function EnergyLineChart() {
  return (
    <LineChart
      data={{
        labels: ["", "", "", "", "", "", ""],
        datasets: [
          {
            data: [5, 5, 23, 12, 17, 12, 18],
          },
        ],
      }}
      width={300}
      height={80}
      bezier
      withDots={false}
      withInnerLines={false}
      withOuterLines={false}
      withHorizontalLabels={false}
      withVerticalLabels={false}
      chartConfig={{
        backgroundColor: "#161616",
        backgroundGradientFrom: "#161616",
        backgroundGradientTo: "#161616",
        color: () => "#05df72", // cor da linha
        strokeWidth: 2,
      }}
      style={{
        paddingRight: 0,
        backgroundColor: "#161616",
      }}
    />
  )
}
