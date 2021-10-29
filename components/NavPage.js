import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList, Image} from 'react-native';

import SPstat from './SPstat'
import SelectStock from './SelectStock'
import UserProfile from './UserProfile'


const Drawer = createDrawerNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>

      <Drawer.Navigator initialRouteName="Home">

        <Drawer.Screen name="Home" component={HomeScreen} />

        <Drawer.Screen name="SPstat" component={SPstat} />

        <Drawer.Screen name="SelectStock" component={SelectStock} />

        <Drawer.Screen name="UserProfile" component={UserProfile} />

      </Drawer.Navigator>
    </NavigationContainer>
  );
};



const HomeScreen = ({ navigation }) => {
  const listRef = React.useRef(null);
  const moveToAbout = () => {
    // `current` points to the mounted text input element
    listRef.current.scrollTo({y:600, animated: true})
  };

  return (
    <ScrollView style={styles.container} ref={listRef}>
    <View style={{   flex:1,
                     flexDirection: 'row',
                     margin:2,
                     justifyContent: 'space-evenly'}}>

        <TouchableOpacity onPress={moveToAbout}
            style={styles.neviButton}>
          <Text style={styles.neviButtonText}> Stock View </Text>
        </TouchableOpacity>

    </View>

    <View style={{flex:18, justifyContent: 'center', alignItems: 'center'}}>
      <Image source={require('../img/stock.jpeg')} style={{flex:1, width: 400, height: 500}} />
    </View>

    <View style={styles.aboutInfo}>
      <Text>
        The App is a stock watching mobile application that is accessible and convenient for quickly stock price supervision, written in React Native as a response to the COSI 153a course project.
      </Text>

      <Text style={{fontWeight: 'bold', paddingTop: 10, fontSize:20}}>
        Components used
      </Text>

      <Text>
        {'\u2B24'} Image: A React component for displaying different types of images, including network images, static resources, temporary local images, and images from local disk, such as the camera roll.
      </Text>

      <Text>
        {'\u2B24'} Text: A React component for displaying text which supports nesting, styling, and touch handling.
      </Text>

      <Text>
        {'\u2B24'} TextInput: A React component for inputting text into the app via a keyboard.
      </Text>

      <Text>
        {'\u2B24'} View: A most fundamental component for building UI.
      </Text>

      <Text>
        {'\u2B24'} ScrollView: A React component for buidling UI that is more flexible and provides a set of scrolling functions.
      </Text>

      <Text style={{fontWeight: 'bold', paddingTop: 20, fontSize:15}}>
        Author: Zihao Liu
      </Text>

      <Text style={{fontWeight: 'bold', paddingTop: 1, fontSize:15}}>
            Last Update: October 29, 2021
      </Text>

      <Text style={{fontWeight: 'bold', paddingTop: 1, fontSize:15}}>
      </Text>
    </View>

  </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingTop: 0,
  },

  neviButton: {
    borderWidth: 1,
    borderColor: "lightblue",
    backgroundColor: "black",
    justifyContent: 'center',
    alignItems: "center",
    width: 380,
    height: 30,
  },

  neviButtonText: {
    color: "white",
    fontSize: 20,
  },

  loginButton: {
    borderWidth: 1,
    borderColor: "lightblue",
    backgroundColor: "green",
    justifyContent: 'center',
    alignItems: "center",
    fontSize: 15,
    width: 94,
  },



  aboutInfo: {
    flex: 20,
    paddingTop: 10,
    alignItems: "flex-start",
    paddingLeft: 10,
    paddingRight: 10,
  }
});


export default MyStack;
