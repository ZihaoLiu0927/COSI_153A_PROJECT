import React, { useState, useEffect } from 'react';
import 'react-native-gesture-handler';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import StockListElement from "./StockListElement";
import ValueProvider, {useValue} from './ValueContext';

const LISTHEIGHT = 60;

const StockHomeScreen = ({ navigation }) => {

  const {currentValue, setCurrentValue} = useValue();

  const [userList, setUserList] = useState([])

  const [manage, setManage] = useState(false);

  useEffect(()=> {
    getUserData();
  },[])

  useEffect(()=> {
    setUserList(currentValue.userList)
  },[currentValue.userList])

  const getUserData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(currentValue.name + "/stocks")
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setUserList(data)
            setCurrentValue({...currentValue, userList: data})
            console.log('load user previous stock list')
          } else {
            console.log('cannot load user previous stock list')
            setUserList([])
          }
        } catch(e) {
          console.log("error in getName ")
          console.dir(e)
        }
  }

  const storeUserData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem(currentValue.name + "/stocks", jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const deleteStock = (item) => {
    let res = userList.filter(
      entry => entry.symbol !== item.symbol
    )
    setUserList(res)
    setCurrentValue({...currentValue, userList: res})
    storeUserData(res)
  }

  const showManageBar = () => {
    setManage(!manage);
  }

  const dButton = (item) => {
    return (
      <TouchableOpacity style = {styles.deleteButton} onPress = {() => deleteStock(item)} >
        <Image source={require('../img/delete.jpeg')} style={styles.deleteButton}/>
      </TouchableOpacity>
    )
  };

  const Item = ({item, navi}) => {
    return (
      <View style={{flexDirection: "row", height: LISTHEIGHT}}>
        {manage ? <View style={{flex: 1, justifyContent: "center", alignItems: "center"}}>{dButton(item)}</View> : <View></View>}
        <View style={styles.stockList}>
          <TouchableOpacity style={styles.button} onPress = {() => navi.navigate(item.symbol)}>
            <View style={{flexDirection: "row"}}>

              <View style={{flex:1, height: LISTHEIGHT, backgroundColor: "green", alignItems: 'flex-start', justifyContent: "space-between"}}>
                <Text style={{color: "white", fontSize: 10}}>
                  {item.symbol}
                </Text>
                <Text style={{color: "white", fontSize: 10}}>
                  {item.name}
                </Text>
              </View>

              <View style={{flex:4, height: LISTHEIGHT, backgroundColor: "yellow", alignItems: 'center',justifyContent: 'center'}}>
                <Text style={{color: "black"}}>
                  {item.symbol}
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
      </View>
    )
  }

  return (
    <View style={styles.container}>
        <View style={{flex:1, flexDirection:'column', paddingRight: 5,
              alignItems:'flex-end',justifyContent:'space-around',backgroundColor:'steelblue'}}>
              <TouchableOpacity onPress = {()=> showManageBar()}>
                <Text style={{fontSize:15, color: "white"}}>
                    Manage
                </Text>
              </TouchableOpacity>
        </View>

        <View style={{flex:15}}>
          <FlatList
            style = {{flex: 1}}
            data = {userList}
            renderItem = {({item}) => (<Item item={item} navi={navigation} />)}
            keyExtractor = {item => item.symbol}
          />
        </View>
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
  flex: 8,
  height: LISTHEIGHT,
  flexDirection: "column",
  alignItems: stockListAlignItems,
  justifyContent: stockListStyle,
  backgroundColor: "black",
  borderWidth: 1,
  borderColor: "white",
},

button: {
  height: LISTHEIGHT,
  alignItems: stockListAlignItems,
  justifyContent: stockListStyle,
  backgroundColor: "red",
},

deleteButton: {
  height: 30,
  width: 30,
  backgroundColor: "black",
  borderRadius:50,
}
});

export default StockHomeScreen;
