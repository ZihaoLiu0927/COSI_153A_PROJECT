import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { polygonClient, restClient, websocketClient } from "@polygon.io/client-js";
import StockListElement from "./StockListElement";

// const App = () => {...}

  const Stack = createNativeStackNavigator();

  const SelectStock = () => {
    return (
      <NavigationContainer>
        <Stack.Navigator>

          <Stack.Screen
            name="Home"
            component={HomeScreen}
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


        </Stack.Navigator>
      </NavigationContainer>
    );
  };


  let StockListUnit =(symbol, navigation)=> (
    <View style={styles.stockList}>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate(symbol)} >
        <View style={{flexDirection: "row"}}>
          <View style={{flex:1, height: 110, backgroundColor: "green", alignItems: 'stretch',justifyContent: 'stretch'}}>
            <Text style={{flex:1, color: "white"}}>
              {symbol}
            </Text>
            <Text style={{color: "white"}}>
              STOCK FULL NAME HERE
            </Text>
          </View>
          <View style={{flex:4, height: 110, backgroundColor: "yellow", alignItems: 'stretch',justifyContent: 'stretch'}}>
            <Text style={{color: "black"}}>
              Figure here
            </Text>
          </View>
          <View style={{flex:1, height: 110, backgroundColor: "blue", alignItems: 'stretch',justifyContent: 'stretch'}}>
            <Text style={{flex: 1, color: "white"}}>
              Price here
            </Text>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );

  const HomeScreen = ({ navigation }) => {
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
      </View>


    );
  }


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
    margin:'20px',
    border:'thick solid black',
  },

  item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},

  stockList: {
    flex: 1,
    height: 110,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: "black",
  },

  button: {
    height: 101,
    alignItems: 'stretch',
    justifyContent: 'stretch',
    backgroundColor: "red",
  }
});

export default SelectStock;
