import React, { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";


const Counter = ({start}) => {
  const [count, setCount] = useState(start);
      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       Count = {count}
    </Text>

    <Button
          color='red' title='Increment'
          onPress = {() =>
               setCount(count+1)          }
      />

    <Button
          color='blue' title='Decrement'
          onPress = {() =>
               setCount(count-1)          }
      />

  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
      flex: 1,
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border:'thick solid blue',
    },
    textinput:{
      margin:20,
      fontSize:20
    },
    header: {
      fontSize:40,
      color:'blue'
    },
    rowContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
  });

export default Counter;
