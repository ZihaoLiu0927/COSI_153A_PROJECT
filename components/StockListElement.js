// Include react
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import {VictoryLine, VictoryChart, VictoryTheme, VictoryCursorContainer, VictoryGroup} from "victory";
import AsyncStorage from '@react-native-async-storage/async-storage';

import {getData, dateString} from "./GetDataFromPolygon";


export default function StockListElement(props) {

  const [stockData, setStockData] = useState([]);
  useEffect(()=> {requestData()}, [])

  const requestData = async()=> {
    const json = await getData(new Date(2021,9,9), props.symbol, "minute");
    setStockData(json);
  }


  return(
    <View>
      <View style={{flex: 1, backgroundColor: "black"}}>
        <Text style={{color: "white", fontSize:60}}>
          {props.symbol}
        </Text>
      </View>

      <View style={{flex: 2, backgroundColor: "white"}}>
         <VictoryChart height={150} width={300} padding={{left: 0, top: 5, right: 0, bottom: 30}}
         containerComponent={
            <VictoryCursorContainer
              cursorLabel={({ datum }) => `${Math.round(datum.y, 2)}`}
            />
          }>
          <VictoryLine data={stockData}
          style={{
            data: { stroke: "red", strokeWidth: 0.5 },
            labels: { angle: -90, fill: "white", fontSize: 1 }
          }}
          x = "idx" y = "vw" size size = {20} />
         </VictoryChart>
      </View>

      <View style={{flex: 1, backgroundColor: "black"}}>
        <Text style={{color: "white", fontSize:60}}>
          Info placeholder
        </Text>
      </View>

    </View>
  );
}

const styles = StyleSheet.create({

});
