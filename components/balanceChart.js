// Include react
import React, { Component } from "react";
import { VictoryBar } from "victory";

const chartData = [
  {
    label: "Jan.",
    value: "9302"
  },
  {
    label: "Feb.",
    value: "12312"
  },
  {
    label: "Mar.",
    value: "14232"
  },
  {
    label: "Apr.",
    value: "14009"
  },
  {
    label: "May.",
    value: "12300"
  },
  {
    label: "Jun.",
    value: "14901"
  },
  {
    label: "Jul.",
    value: "15092"
  },
  {
    label: "Aug.",
    value: "16223"
  },
  {
    label: "Sept.",
    value: "16902"
  },
  {
    label: "Oct.",
    value: "17921"
  },
  {
    label: "Nov.",
    value: "16821"
  },
  {
    label: "Dec.",
    value: "13002"
  }
];

// STEP 3 - Creating the JSON object to store the chart configurations
const chartConfigs = {
  type: "line", // The chart type
  width: "500", // Width of the chart
  height: "400", // Height of the chart
  dataFormat: "json", // Data type
  dataSource: {
    // Chart Configuration
    chart: {
      //caption: "Countries With Most Oil Reserves [2017-18]",
      //subCaption: "In MMbbl = One Million barrels",
      xAxisName: "total",
      //yAxisName: "Reserves (MMbbl)",
      numberSuffix: "$",
      //Set the theme for your chart
      theme: "fusion"
    },
    // Chart Data
    data: chartData
  }
};

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class MyChart extends Component {
  render() {
    return (
        <VictoryBar />
      );
  }
}

export default MyChart;
