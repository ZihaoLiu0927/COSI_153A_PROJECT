import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button } from 'react-native';

// const App = () => {...}
export default function SPstat() {
  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={{fontSize:64}}>
                  SP500 summary
              </Text>

        </View>

      </View>


  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'space-between',
    flexDirection:'column',
    margin:20,
  },

});
