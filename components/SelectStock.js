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

  const show = (array) => {
    return (
      <Stack.Navigator>
        <Stack.Screen
          name="Selected Stock List"
          component={StockHomeScreen}
        />
        <Stack.Screen
          name = "stock"
          component={StockListElement}
        />
      </Stack.Navigator>
  )};

  return (
    show(currentValue.userList)
  );
};

export default SelectStock;
