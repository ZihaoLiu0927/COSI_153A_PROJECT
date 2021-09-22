import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View, Image } from "react-native";


const PhotoID = ({name,imageurl}) => {
      return (
  <View style={styles.container}>
    <View style={{flex:1}}>
      <Image source={{uri:imageurl}}
        style={{width: '100%', height: '100%'}}/>
    </View>

    <View style={{flex:1, alignItems: 'center', justifyContent: 'center'}}>
      <Text> {name} </Text>
    </View>
  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'row',
    }
  });

export default PhotoID;
