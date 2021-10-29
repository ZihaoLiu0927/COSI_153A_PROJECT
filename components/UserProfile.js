import React, { useState, useEffect, Component } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, AppRegistry } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import UserImagePicker from './ImagePicker'
import MyChart from './balanceChart';



export default function App() {
  const [name, setName] = useState(null);
  const [balance, setBalance] = useState(10000);
  const [invest, setInvest] = useState(9000);

  useEffect(() => {getData()},[])
  useEffect(() => {saveAsyncData()}, [name])

  const debugView =
    (<View>
      <Text style={styles.debug}>
        DEBUGGING INFO
      </Text>
      <Text style={{color: "white"}}>
         name is ({name})
      </Text>
  </View>);

  const getData = async () => {
        try {
          const jsonValue = await AsyncStorage.getItem('@usrName')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setName(data.name)
            console.log('load previous name')
          } else {
            console.log('cannot load previous name')
            setName(null)
          }
        } catch(e) {
          console.log("error in getName ")
          console.dir(e)
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@usrName', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
        }
  }

  const saveAsyncData = () => {
    const newData =
      {name:name}
    storeData(newData);
  }

  return (
    <View style={styles.container}>
        <View style={{flex:1, flexDirection:'column'}}>
          <View style={{flex: 2, paddingTop: 10}}>
            <UserImagePicker/>
          </View>
          <View style={{flex: 1, flexDirection: 'row', alignItems: "center"}}>
            <View style={{flex: 2}}>
            </View>

            <View style={{flex: 2, justifyContent:"center", alignItems:"center"}}>
              <TextInput style={{fontSize: 28, color: "white", height: 30, width: 250, textAlign: 'center'}}
                         placeholder="Put Your Name Here"
                         value= {name}
                         onChangeText={text => {setName(text)}} />
            </View>
            <View style={{flex: 2}}>
            </View>
          </View>
          <View style={{flex: 1}}>
            <Text style={{fontSize: 22,color: "white", textAlign: 'center'}}>
              Simulated balance: {balance} $
            </Text>
          </View>

        </View>


        <View style={{flex:2, flexDirection:'column',
                      justifyContent:'space-around',
                      backgroundColor:'white'}}>
          <View style={{flex: 1, paddingBottom:15, backgroundColor: "#3399ff"}}>
            <Text style={{fontSize:38, color: "black"}}>Investing </Text>
          </View>
          <View style={{flex: 1, paddingBottom:15, backgroundColor: "#3399ff"}}>
            <Text style={{fontSize:34, color: "white"}}>${invest} </Text>
          </View>
          <View style={{flex: 1, paddingBottom:15, backgroundColor: "#3399ff"}}>
            <Text style={{fontSize:34, color: "white"}}> ???</Text>
          </View>

          <View style={{flex: 5, backgroundColor: "#3399ff"}}>
            <MyChart />
          </View>


        </View>
        {false ? debugView : null}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 350,
    backgroundColor: 'black',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection:'column',
    margin:20,
  },

  debug: {
    textAlign:'center',
    backgroundColor:'#00cc66',
    fontSize: 32,
    padding:10,
    color: 'white'
  },
});
