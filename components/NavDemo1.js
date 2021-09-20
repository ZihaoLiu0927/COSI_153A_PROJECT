import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { StyleSheet, Text, View, Button, } from 'react-native';

import Quiz1a from './quiz1a'
import Quiz1b from './quiz1b'
import FlexDemo1Screen from './FlexDemo1'



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

        <Stack.Screen name="quiz1a" component={Quiz1a} />

        <Stack.Screen name="quiz1b" component={Quiz1b} />

        <Stack.Screen name="FlexDemo1" component={FlexDemo1Screen} />

      </Stack.Navigator>
    </NavigationContainer>
  );
};


const HomeScreen = ({ navigation }) => {
  return (
      <View style={{ flexDirection: 'row',
                     margin:"25px",
                     border:"thick solid black",
                     padding:'10px',
                     justifyContent: 'space-around', }}>

        <Button
          title="My quiz 1a result"
          onPress={() =>
            navigation.navigate('quiz1a')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="My quiz 1b result"
          onPress={() =>
            navigation.navigate('quiz1b')
               // we're passing a parameter name:'Jane' to the Profile component!
          }
        />

        <Button
          title="Checkout the Flexbox demo!!"
          onPress={() =>
            navigation.navigate('FlexDemo1')
          }
        />
    </View>
  );
};

// ProfileScreen function is called with a JSON object
//  {navigation:..., route:...,  otherstuff}
const ProfileScreen = ({ navigation, route }) => {
  return <Text>{route.params.greeting}, this is {route.params.name}'s profile</Text>;
       // we're using the parameter name passed in from the HomeScreen
};

export default MyStack;
