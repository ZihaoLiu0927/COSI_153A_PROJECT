// Include react
import React, { Component, useEffect, useState } from "react";
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import {VictoryLine, VictoryChart, VictoryTheme, LineSegment, createContainer, VictoryScatter, VictoryCursorContainer, VictoryVoronoiContainer, VictoryTooltip, VictoryLabel, VictoryAxis} from "victory-native";
import Svg, {Line} from 'react-native-svg';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {range, first, last,maxBy } from 'lodash';

import {getData, dateString, getNews} from "./GetStockData";


export default function StockListElement(props) {
  const [chartData, setChartData] = useState([]);
  const [news, setNews] = useState([]);
  const [selectTime, setSelectTime] = useState("1D");
  const [cursor, setCursor] = useState({
    time: "",
    price: 0,
  });

  useEffect(()=> {requestNews()}, [])
  useEffect(()=> {[requestChartData()]}, [selectTime])

  const requestChartData = async()=> {
    const json = await getData(props.symbol, selectTime);
    setChartData(json);
  }

  const requestNews = async() => {
    const json = await getNews(props.symbol);
    setNews(json);
  }

  const changeTime = (newTime) => {
    setTime(newTime)
  }

  const dateFormatter = (d) => {
    let time = d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + "-" + d.getHours() + ":" + (d.getMinutes() + 1) + ":" + (d.getSeconds() + 1)
    return time
  }

  const changeCursorData = (value) => {
    if (value !== null) {
      setCursor({time: dateFormatter(value.x), price: Number.parseFloat(value.y).toFixed(2)})
    }
  }

  const nothingPage = () => {
    return (
      <View style = {{flex: 1, backgroundColor: "black", alignItems: 'center'}}>
        <Image source={require('../img/nothing.jpeg')} style = {{flex: 1, width: '100%'}}/>
      </View>
    )
  }

  const timeOptions = [{time: "1D"},
                       {time: "1W"},
                       {time: "1M"},
                       {time: "3M"},
                       {time: "6M"},
                       {time: "ALL"}];

  const Item = ({item, onPress, backgroundColor}) => {
    return (
      <View style = {{paddingLeft:14, paddingRight:14, paddingTop: 8, backgroundColor: backgroundColor}}>
        <TouchableOpacity onPress = {onPress}>
          <Text style = {{color: "white", fontSize:20}}>
            {item.time}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  const News = ({item}) => {
    return (
      <View style = {{backgroundColor: "black"}}>
        <Text style = {{color: "red", fontSize: 15, paddingLeft:10, paddingTop: 10}}>
          News published on: {item.publishedOn}
        </Text>
        <Text style = {{color: "blue", paddingLeft: 10}}>
          News provider: {item.provider}
        </Text>
        <Text style = {{color: "white", paddingLeft: 10, paddingRight: 5, paddingTop: 5}}>
          Summary: {item.summary}
        </Text>
      </View>
    );
  }

  const renderItem = ({item}) => {
    const buttonBgColor = item.time == selectTime ? "red" : "black";
    return (
      <Item item={item} onPress={() => setSelectTime(item.time)} backgroundColor = {buttonBgColor}/>
    )
  }

  return(
    <View style={{flex: 1, backgroundColor: "black"}}>
      <View style={{flex: 1, backgroundColor: "green"}}>
        <Text style={{color: "white", fontSize:20, paddingLeft: 20}}>
          Date:   {cursor.time}
        </Text>
        <Text style={{color: "white", fontSize:20, paddingLeft: 20}}>
          Price:   {cursor.price}
        </Text>
      </View>

      <View style={{flex: 7, backgroundColor: "black"}}>
        <VictoryChart height={340} width={380} padding={{left: 20, top: 5, right: 20, bottom: 0}}
          style={{ background: { fill: "black" } }}
          containerComponent={
             <VictoryCursorContainer
             onCursorChange = {(value, props) => changeCursorData(value)}
             cursorComponent={<LineSegment style = {{stroke: "white"}}/>} />
           } >

           <VictoryLine data={chartData}
             scale = {{x: "time", y: "linear"}}
             style={{
               data: { stroke: "red", strokeWidth: 3 },
             }}
             size = {20}
             x = "timestamp"
             y = "close" />

        </VictoryChart>
        <View style = {{flex:1}}>
          <FlatList
            style={{paddingLeft: 20, backgroundColor: "black"}}
            data = {timeOptions}
            renderItem = {renderItem}
            keyExtractor = {item => item.time}
            horizontal
          />
        </View>
      </View>

      <View style={{flex: 4, backgroundColor: "white"}}>
        {news.length === 0 ? nothingPage() :
        <FlatList
          style={{backgroundColor: "white"}}
          data = {news.slice(0, 10)}
          renderItem = {({item}) => (<News item={item}/>)}
          keyExtractor = {item => item.id}
        /> }
      </View>

    </View>
  );
}
