import React from 'react';
import { StyleSheet, Text, View, Button, TextInput, } from 'react-native';
// const App = () => {...}

export default function App() {
  return (

    <View style={styles.container}>
      <View style={{flex:1, flexDirection:'row',
              alignItems:'center', justifyContent:'center', backgroundColor:'yellow'}}>
        <Text style={{fontSize:44}}>
          Quiz 1
        </Text>
      </View>

      <View style={{flex:1.5, flexDirection:'row',
              alignItems:'flex-end', justifyContent:'space-around', backgroundColor:'yellow'}}>
        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"yellow", paddingRight: 130, paddingLeft: 130}}>
          <Text style={{fontSize:15}}>
            Write the App.js code to create this app, including the Quiz 1 header above and all of the text that appears here.
          </Text>
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"yellow", paddingRight: 100, paddingLeft: 100}}>
          <Text style={{fontSize:15}}>
            You may use resources you want to complete this but do not ask for help from anyone. This should be your work entirely.
          </Text>
        </View>

        <View style={{flex:1, alignItems:'center', justifyContent:'center', backgroundColor:"yellow", paddingRight: 130, paddingLeft: 130}}>
          <Text style={{fontSize:15}}>
            Also, do not offer to help anyone, and if someone asks you for help let me know so I can tell them this is inappropriate.
          </Text>
        </View>
      </View>

      <View style={{flex:4, flexDirection:"row",
               backgroundColor:'white'}}>
        <View style={{flex:1, flexDirection: "column", alignItems:'center', justifyContent:'center', backgroundColor:'red'}}>
          <Text style={{fontSize:30}}>
            Red Left
          </Text>
        </View>

        <View style={{flex:1, flexDirection: "column", alignItems:'center', justifyContent:'flex-end', backgroundColor:'yellow'}}>
          <Text style={{fontSize:30}}>
            Yellow Middle
          </Text>
        </View>

        <View style={{flex:1, flexDirection: "column", alignItems:'flex-end', justifyContent:'flex-start', backgroundColor:'#00ffff'}}>
          <Text style={{fontSize:30}}>
            Aqua Right
          </Text>
        </View>
      </View>

      <View style={{flex:4, flexDirection:'row',
               backgroundColor:'green'}}>
        <img src={require('../img/dog.png')} style={{flex:1}} />
        <View style={{flex:1, flexDirection: "column", alignItems:'center', justifyContent:'flex-start', backgroundColor:'green'}}>
          <Text style={{fontSize:30}}>
                  Select any iamge of a puppy from the web for this quiz...
          </Text>
        </View>
        <img src={require('../img/dog.png')} style={{flex:1}} />

        <View style={{flex:1, flexDirection: "column", alignItems:'stretch', justifyContent:'flex-start', backgroundColor:'white'}}>
          <Text style={{fontSize:30}}>
            Enter your name and birth year in the textfields below
          </Text>
          <TextInput style={styles.input} value="your full name"/>
          <TextInput style={styles.input} value="your birth year"/>
          <Button title="submit" color="red" />
        </View>
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
  },
  input: {
  height: 40,
  margin: 0,
  borderWidth: 0,
  backgroundColor: "yellow",
  padding: 0,
  color: "grey",
  fontSize:22,
},

});
