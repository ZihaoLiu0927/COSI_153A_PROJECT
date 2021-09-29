import React, { useState } from "react";
<<<<<<< HEAD
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
=======
import { Button, StyleSheet, Text,  View } from "react-native";


// const mph2fps = (mph) => mph*5280/3600

const Counter = ({start, name}) => {
// const Counter = (props) => {
//   const start = props.start
//   const name = props.name
  const [count, setCount] = useState(start);


      return (
  <View style={styles.container}>
    <Text style={styles.header}>
       <Text style={{fontSize:100}}> {name}:</Text>
        Count = {count}
    </Text>

    <Button
          color='green' title='Increment'
>>>>>>> main
          onPress = {() =>
               setCount(count+1)          }
      />

<<<<<<< HEAD
    <Button
          color='blue' title='Decrement'
          onPress = {() =>
               setCount(count-1)          }
      />
=======
      <Button
            color='red' title='Decrement'
            onPress = {() =>
                 setCount(count-1)          }
        />

>>>>>>> main

  </View>
      );
    }
  const styles = StyleSheet.create ({
    container: {
<<<<<<< HEAD
      flex: 1,
=======
      //flex: 1,
>>>>>>> main
      flexDirection:'column',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      border:'thick solid blue',
<<<<<<< HEAD
=======
      margin:"20px",
      padding:"20px",
>>>>>>> main
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

<<<<<<< HEAD
export default Counter;
=======
export default  Counter;
>>>>>>> main
