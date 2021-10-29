import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

// const App = () => {...}
export default function DOWstat() {

  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={{fontSize:64}}>
                  DOW summary
              </Text>

        </View>

        <View>
          <Button title="button"/>
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
    margin: 20,
  },

});
