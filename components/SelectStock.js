import React from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';

// const App = () => {...}
export default function SelectStock() {
  return (
    <View style={styles.container}>

        <View style={{flex:2, flexDirection:'column',
              alignItems:'center',justifyContent:'space-around',backgroundColor:'yellow',}}>

              <Text style={{fontSize:64}}>
                  My stock list
              </Text>

        </View>

        <FlatList
          data={[
            {key: 'stock 1'},
            {key: 'stock 2'},
            {key: 'stock 3'},
            {key: 'stock 4'},
            {key: 'stock 5'},
            {key: 'stock 6'},
            {key: 'stock 7'},
            {key: 'stock 8'},
            {key: 'stock 9'},
            {key: 'stock 10'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />

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

  item: {
  padding: 10,
  fontSize: 18,
  height: 44,
},
});
