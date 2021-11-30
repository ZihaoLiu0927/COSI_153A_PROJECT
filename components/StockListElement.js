// Include react
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import {VictoryLine, VictoryChart, VictoryTheme, createContainer, VictorySharedEvents, VictoryCursorContainer, VictoryVoronoiContainer, VictoryTooltip, VictoryLabel, VictoryAxis} from "victory-native";
import AsyncStorage from '@react-native-async-storage/async-storage';
import {range, first, last,maxBy } from 'lodash';

import {getData, dateString} from "./GetDataFromPolygon";


export default function StockListElement(props) {

  const [chartData, setChartData] = useState([]);
  const [timeRange, setTimeRange] = useState("minute");
  const [cursorX, setCursorX] = useState("");
  const [cursorY, setCursorY] = useState(0);
  useEffect(()=> {requestChartData()}, [timeRange])

  const requestChartData = async()=> {
    const json = await getData(new Date(2021,9,9), props.symbol, timeRange);
    setChartData(json);
  }

  const changeTime = (newTime) => {
    setTime(newTime)
  }

  const dateFormatter = (d) => {
    let time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getHours() + ":" + (d.getMinutes() + 1) + ":" + (d.getSeconds() + 1)
    return time
  }


  const data = range(20,81).map((x) => ({x, y: x*x}));

  const VictoryCursorVoronoiContainer = createContainer( "cursor","voronoi");

  const findClosestPointSorted = (data, value) => {
    if (value === null) return null;
      const start = first(data).x;
      const range = (last(data).x - start);
    const index = Math.round((value - start)/range * (data.length - 1));
    return data[index];
  };


  return(
    <View style={{flex: 1, backgroundColor: "black"}}>
      <View style={{flex: 1, backgroundColor: "green"}}>
        <Text style={{color: "white", fontSize:20, paddingLeft: 20}}>
          Date:   {cursorX}
        </Text>
        <Text style={{color: "white", fontSize:20, paddingLeft: 20}}>
          Price:   {cursorY}
        </Text>
      </View>

      <View style={{flex: 5, backgroundColor: "black"}}>

      </View>

      <View style={{flex: 3, backgroundColor: "white"}}>
        <Text style={{color: "black", fontSize:20}}>
          Info placeholder
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});
