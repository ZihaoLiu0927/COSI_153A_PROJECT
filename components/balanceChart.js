// Include react
import React, { Component } from "react";
import {VictoryLine, VictoryChart, VictoryTheme, VictoryClipContainer, VictoryLabel, VictoryCursorContainer, VictoryGroup} from "victory-native";

const chartData = [
  {
    label: "Jan.",
    value: 9302
  },
  {
    label: "Feb.",
    value: 12312
  },
  {
    label: "Mar.",
    value: 14232
  },
  {
    label: "Apr.",
    value: 14009
  },
  {
    label: "May.",
    value: 12300
  },
  {
    label: "Jun.",
    value: 14901
  },
  {
    label: "Jul.",
    value: 15092
  },
  {
    label: "Aug.",
    value: 16223
  },
  {
    label: "Sept.",
    value: 16902
  },
  {
    label: "Oct.",
    value: 17921
  },
  {
    label: "Nov.",
    value: 16821
  },
  {
    label: "Dec.",
    value: 13002
  }
];

// STEP 4 - Creating the DOM element to pass the react-fusioncharts component
class MyChart extends React.Component {
  render() {
    return (
      <VictoryChart height={250} width={350}
        padding={{left: 0, top: 0, right: 0, bottom: 25}}
        domainPadding={{ x: 10, y : 10 }}
      style={{ background: { fill: "#3399ff" } }}
      containerComponent={
         <VictoryCursorContainer
           cursorLabel={({ datum }) => `${Math.round(datum.y, 2)}`}
         />
       }>
       <VictoryLine data={chartData}
                    labels={({ datum }) => datum.x}
                    x = "label" y = "value"

       style={{
         data: { stroke: "red", strokeWidth: 2 },
         labels: { fill: "black"},
       }}  />
      </VictoryChart>
      );
  }
}

export default MyChart;
