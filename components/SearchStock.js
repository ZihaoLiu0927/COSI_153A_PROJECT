import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity, FlatList } from 'react-native';
import { SearchBar } from 'react-native-elements';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';
import {useValue} from './ValueContext';


let LISTHEIGHT = 50;

export default function SearchStock() {

  const {currentValue, setCurrentValue} = useValue();
  //const [userList, setUserList] = useState([])
  const [stock, setStock] = useState("");
  const [searchRes, setSearchRes] = useState([]);


  useEffect(()=> {
    getUserData();
  },[])

  useEffect(()=> {
    getSearchResults(stock)
  },[stock])

  // useEffect(()=> {
  //   setUserList(currentValue.userList)
  // },[currentValue.userList])

  const getUserData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem(currentValue.name + "/stocks")
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            //setUserList(data)
            setCurrentValue({...currentValue, userList: data})
            console.log('load user previous stock list')
          } else {
            console.log('cannot load user previous stock list')
            //setUserList([])
          }
        } catch(e) {
          console.log("error in getting user previous stock list ")
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

  const addStock = (item) => {
    let target = {symbol: item.symbol, name: item.name}
    if (!currentValue.userList.some(x => x.symbol == target.symbol)) {
      let newArray = [...currentValue.userList, target]
      //setUserList(newArray)
      storeUserData(newArray)
      setCurrentValue({...currentValue, userList: newArray})
    }
    console.log(currentValue)
  }


  const getSearchResults = async (string) => {

    let APIKEY = "QQ3by7yyYj2FDH4vHllM92caW8KJ3LDf3jpEeQ8v";
    //let APIKEY = "";
    let res = [];

    try{
      if (string != "") {
        let option = {
          method: 'GET',
          url: 'https://yfapi.net/v6/finance/autocomplete?region=US&lang=en&query=' + string,
          headers: {
            'x-api-key': APIKEY,
          }
        };
        const response = await Axios.request(option);
        if (response.data) {
          res = response.data.ResultSet.Result;
        }
      } else {
          res = []
      }
    }
    catch(e) {
        console.log("error in get search results ")
        console.dir(e)
    }
    setSearchRes(res);
  }


  const Item = ({item}) => {
    return (
      <View style={{flexDirection: "row", height: LISTHEIGHT}}>
        <View style = {{flex: 15, justifyContent: "center", alignItems: 'flex-start', paddingLeft: 5, paddingTop: 5}}>
          <Text style = {{color: "white"}}> {item.name} </Text>
          <Text style = {{color: "white"}}> {item.symbol} </Text>
        </View>

        <View style = {{flex : 2, justifyContent: "center"}}>
          <TouchableOpacity style = {styles.addButton} onPress = {() => addStock(item)} >
            {!currentValue.userList.some(x => x.symbol == item.symbol) ? <Image source={require('../img/addButton.jpeg')} style={styles.addButton}/> : <Image source={require('../img/checkButton.jpeg')} style={styles.addButton}/> }
          </TouchableOpacity>
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>

      <SearchBar
          value = {stock}
          placeholder = "Input the stock symbol to search"
          onChangeText={text => {setStock(text)}} />
      <View>
        <FlatList
          data = {searchRes}
          renderItem = {({item}) => (<Item item={item}/>)}
          keyExtractor = {item => item.symbol}
        />
      </View>
    </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'flex-start',
    flexDirection:'column',
    margin:20,
  },

  addButton: {
    height: 30,
    width: 30,
    backgroundColor: "black",
    borderRadius:50,
  }

});
