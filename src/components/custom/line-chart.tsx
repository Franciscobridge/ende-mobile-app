import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

const width = Dimensions.get("window").width;

export function EnergyLineChart() {
  return (
      <LineChart
        data={{
          labels: ["", "", "", "", "", "", ""],
          datasets: [
            {
              data: [10, 14, 9, 18, 12, 15, 14],
            },
          ],
        }}
        width={width - 32}
        height={110}
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
          color: () => "#29af34", // cor da linha
          strokeWidth: 2,
        }}
        style={{
          paddingRight: 0,
          backgroundColor: "#161616",
          marginTop: -15
        }}
      />
  );
}
