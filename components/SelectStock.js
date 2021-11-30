import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StockListElement from "./StockListElement";
import ValueProvider, {useValue} from './ValueContext';
import StockScreen from "./StockScreen"


const Stack = createNativeStackNavigator();

const SelectStock = () => {

  const {currentValue, setCurrentValue} = useValue();

  const DynamicList = (stock) => {
    return (
      <Stack.Screen name={stock}>
        {()=> <StockListElement symbol={stock}/>}
      </Stack.Screen>
  )};

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Selected Stock List"
        component={StockScreen}
      />
      {DynamicList("GOOGL")}
    </Stack.Navigator>
  );
};

export default SelectStock;
