import React from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
import StockListElement from "./StockListElement";
// const App = () => {...}

  const LISTHEIGHT = 100;

  const Stack = createNativeStackNavigator();

  const SelectStock = () => {

    return (
        <Stack.Navigator>
          <Stack.Screen
            name="List of Stock Price"
            component={StockScreen}
          />

          <Stack.Screen name="GOOGLE">
            {()=> <StockListElement symbol="GOOGL"/>}
          </Stack.Screen>

          <Stack.Screen name="AMAZON">
            {()=> <StockListElement symbol="AMZN"/>}
          </Stack.Screen>

          <Stack.Screen name="FACEBOOK">
            {()=> <StockListElement symbol="FB"/>}
          </Stack.Screen>

          <Stack.Screen name="APPLE">
            {()=> <StockListElement symbol="AAPL"/>}
          </Stack.Screen>

          <Stack.Screen name="NVDA">
            {()=> <StockListElement symbol="NVDA"/>}
          </Stack.Screen>

          <Stack.Screen name="AMD">
            {()=> <StockListElement symbol="AMD"/>}
          </Stack.Screen>

        </Stack.Navigator>
    );
  };


  const StockListUnit = (symbol, navigation)=> {

    return(
      <View style={styles.stockList}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(symbol)} >
          <View style={{flexDirection: "row"}}>
            <View style={{flex:1, height: LISTHEIGHT, backgroundColor: "green", alignItems: 'flex-start',justifyContent: 'space-between'}}>
              <Text style={{color: "white"}}>
                {symbol}
              </Text>
              <Text style={{color: "white"}}>
                STOCK FULL NAME HERE
              </Text>
            </View>
            <View style={{flex:4, height: LISTHEIGHT, backgroundColor: "yellow", alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{color: "black"}}>
                Figure here
              </Text>
            </View>
            <View style={{flex:1, height: LISTHEIGHT, backgroundColor: "blue", alignItems: 'center',justifyContent: 'center'}}>
              <Text style={{flex: 1, color: "white"}}>
                Price here
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const StockScreen = ({ navigation }) => {
    const listRef = React.useRef(null);
    const moveToAbout = () => {
      // `current` points to the mounted text input element
      listRef.current.scrollTo({y:600, animated: true})
    };

    return (
      <View style={styles.container}>

          <View style={{flex:1, flexDirection:'column',
                alignItems:'center',justifyContent:'space-around',backgroundColor:'steelblue'}}>

                <Text style={{fontSize:32, color: "white"}}>
                    Selected stock list
                </Text>
          </View>
          {StockListUnit("GOOGLE", navigation)}
          {StockListUnit("AMAZON", navigation)}
          {StockListUnit("FACEBOOK", navigation)}
          {StockListUnit("APPLE", navigation)}
          {StockListUnit("NVDA", navigation)}
          {StockListUnit("AMD", navigation)}
      </View>


    );
  }

const stockListStyle = "space-between"
const stockListAlignItems = "stretch"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: stockListAlignItems,
    justifyContent: stockListStyle,
    flexDirection:'column',
    margin:20,
  },

  item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},

  stockList: {
    flex: 1,
    height: LISTHEIGHT,
    alignItems: stockListAlignItems,
    justifyContent: stockListStyle,
    backgroundColor: "black",
    borderWidth: 2,
  },

  button: {
    height: LISTHEIGHT,
    alignItems: stockListAlignItems,
    justifyContent: stockListStyle,
    backgroundColor: "red",
  }
});

export default SelectStock;
