import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StyleSheet, Text, View, TouchableOpacity, ScrollView, SafeAreaView, FlatList} from 'react-native';

import AboutInfo from './AboutPage'
import SelectList from './SelectStock'
import SPstat from './SPstat'
import Dowstat from './Dowstat'


const Stack = createNativeStackNavigator();

const MyStack = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
          name="Home"
          component={HomeScreen}
          //options={{ title: 'Welcome' }}
        />

        <Stack.Screen name="AboutInfo" component={AboutInfo} />

        <Stack.Screen name="SPstat" component={SPstat} />

        <Stack.Screen name="Dowstat" component={Dowstat} />

        <Stack.Screen name="SelectList" component={SelectList} />


      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  const listRef = React.useRef(null);
  const moveToAbout = () => {
    // `current` points to the mounted text input element
    listRef.current.scrollTo({y:650, animated: true})
  };

  return (
    <ScrollView style={styles.container} ref={listRef}>
    <View style={{   flex:1,
                     flexDirection: 'row',
                     margin:"2px",
                     padding:'0px',
                     justifyContent: 'space-evenly'}}>

        <TouchableOpacity style={styles.neviButton}
          onPress={moveToAbout}
        > ABOUT THE APP </TouchableOpacity>

        <TouchableOpacity style={styles.neviButton}
          onPress={() =>
            navigation.navigate('SPstat')
          }
        > S&P 500 STATISTICS </TouchableOpacity>


        <TouchableOpacity style={styles.neviButton}
          onPress={() =>
            navigation.navigate('Dowstat')
          }
        > DOW STATISTICS </TouchableOpacity>


        <TouchableOpacity style={styles.neviButton}
          onPress={() =>
            navigation.navigate('SelectList')
          }
        > SELECTED STOCK LIST </TouchableOpacity>

    </View>

    <View style={{flex:18,}}>
      <img src={require('../img/stock.jpeg')} style={{flex:1}} />
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
    </View>

  </ScrollView>
  );
};


const styles = StyleSheet.create({
  container: {
    padding: 30,
    paddingTop: 0,
  },

  neviButton: {
    borderWidth: 3,
    borderColor: "lightblue",
    backgroundColor: "red",
    justifyContent: 'center',
    alignItems: "center",
    color: "white",
    fontSize: 15,
    width: 180,
  },

  aboutInfo: {
    flex: 20,
    paddingTop: 20,
  }
});


export default MyStack;
