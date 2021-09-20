import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
// const App = () => {...}

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{flex:1, flexDirection:'column',
              alignItems:'flex-start',justifyContent:'space-around',backgroundColor:'yellow'}}>
          <Text style={{fontSize:44}}>
              Quiz 1a
          </Text>
          <Text style={{fontSize:13}}>
              CS153a Fall21
          </Text>
          <Text style={{fontSize:13}}>
              Write the code for this app, including the quiz 1a title and this text! The layout is five unites high and 3 unites wide
          </Text>
      </View>

      <View style={{flex:1, flexDirection:'row',
              alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
          <View style={{flex:1, flexDirection:'row',
                      alignItems:'center', justifyContent:'center', backgroundColor:'white'}}>
            <Text>
              Choose your gift by pressing the button
            </Text>
          </View>

          <View style={{flex:1, flexDirection:'row',
                      alignItems:'space-between', justifyContent:'center', backgroundColor:'white'}}>
            <button style={{backgroundColor:'green', minWidth: "40%", color: 'white', borderColor: "green"}}>
              THIS IS A BIG GREEN BUTTON!
            </button>
          </View>
      </View>

      <View style={{flex:3, flexDirection:'row',
             justifyContent:'space-around',backgroundColor:'green',}}>
          <View style={{flex:1, flexDirection: "row", backgroundColor:'lightgreen'}}>
            <Text>
                lightgreen
            </Text>
          </View>
          <View style={{flex:1, flexDirection: "column", backgroundColor:'white'}}>
            <View style={{flex:1, flexDirection: "row", backgroundColor:'red'}}>
              <Text>
                red
              </Text>
            </View >
            <View style={{flex:1, flexDirection: "row", backgroundColor:'white'}}>
              <Text>
                white
              </Text>
            </View >
            <View style={{flex:1, flexDirection: "row", backgroundColor:'blue'}}>
              <Text>
                blue
              </Text>
            </View >
          </View>
          <View style={{flex:1, flexDirection: "row", backgroundColor:'lightgreen'}}>
            <Text>
                lightgreen
            </Text>
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

});
