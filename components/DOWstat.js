import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert } from 'react-native';

// const App = () => {...}
export default function Dow() {
  const [removeImg, setRemoveImg] = useState(true);

  const askPurpose = () => {
    Alert.alert("what you want to do?",
                "what you want to do?",
      [
        {
          text: "upload new image",
          onPress: setRemoveImg(false),
          //console.log("upload new image"),
        },
        {
          text: "remove image",
          onPress: setRemoveImg(true),
          //console.log("remove image"),
        }
      ]
    );

  }

  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={{fontSize:64}}>
                  DOW summary
              </Text>

        </View>

        <View>
          <Button onPress = {askPurpose}/>
        </View>

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

});
