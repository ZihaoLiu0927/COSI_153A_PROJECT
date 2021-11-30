import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StockListElement from "./StockListElement";
import ValueProvider, {useValue} from './ValueContext';
import StockHomeScreen from "./StockHomeScreen"


const Stack = createNativeStackNavigator();

const SelectStock = () => {

  const {currentValue, setCurrentValue} = useValue();

  const [userList, setUserList] = useState([])

  useEffect(()=> {
    setUserList(currentValue.userList)
  },[currentValue.userList])

  const DynamicList = (stock) => {
    return (
      <Stack.Screen name={stock}>
        {()=> <StockListElement symbol={stock}/>}
      </Stack.Screen>
  )};

  const show = (array) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Selected Stock List"
          component={StockHomeScreen}
        />
        {array.map((x) => DynamicList(x.symbol))}
      </Stack.Navigator>
  )};

  return (
    show(userList)
  );
};

export default SelectStock;
