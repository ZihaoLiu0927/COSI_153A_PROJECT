import React, { useState, useEffect } from 'react';
import { Button, Image, View, Platform, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';


const UserImagePicker = (props) => {
//export default function UserImagePicker() {
  const [image, setImage] = useState(null);
  //const [removeImg, setRemoveImg] = useState(true);

  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
          alert('Sorry, we need camera roll permissions to make this work!');
        }
      }
    })();
  }, []);

  useEffect(() => {getData()},[])
  useEffect(() => {saveAsyncData()}, [image])

  // useEffect(() => {
  //   pickImage()},[removeImg]
  // );

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    console.log(result);

    if (!result.cancelled) {
      setImage(result.uri);
    }
  };

  // const askPurpose = () => {
  //   Alert.alert("what you want to do?",
  //               "what you want to do?",
  //     [
  //       {
  //         text: "upload new image",
  //         //onPress: () =>  setRemoveImg(true),
  //         //console.log("upload new image"),
  //       },
  //       {
  //         text: "remove image",
  //         //onPress: () =>  setRemoveImg(true),
  //         //console.log("remove image"),
  //       }
  //     ]
  //   );
  // }

  // const processClick = () => {
  //   image ? askPurpose() : setRemoveImg(false);
  // }

  const getData = async () => {
        try {
          // the '@mathQuiz' can be any string
          const jsonValue = await AsyncStorage.getItem('@usrImage')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setImage(data.image)
            console.log('load previous image')
          } else {
            console.log('cannot load previous image')
            // this happens the first time the app is loaded
            // as there is nothing in storage...
            setImage(null)
          }
        } catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
        }
  }

  const storeData = async (value) => {
        try {
          const jsonValue = JSON.stringify(value)
          await AsyncStorage.setItem('@usrImage', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const saveAsyncData = () => {
    const newImg =
      {image:image}
    storeData(newImg);
  }

  return (
    <View style={styles.container}>
      <View style={{flex: 4}}>
      </View>

      <View style={styles.circle}>
        <TouchableOpacity style={styles.button} title="Pick an image from your device" onPress={pickImage} >
          {!image && <img src={require('../img/defaultFace.png')} />}
          {image && <Image source={{ uri: image }} style={styles.circle} />}
        </TouchableOpacity>
      </View>

      <View style={{flex: 4}}>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
    container:{
      flexDirection:'row',
    },

    circle:{
      flex: 2,
      //marginRight:10,
      alignItems:'center',
      justifyContent:'center',
      //width: 200,
      //height:28,
      backgroundColor:'#f76260',
      borderColor:'green',
      //borderStyle:'solid',
      borderRadius:50,
      //paddingBottom:2
    },

    button: {
      width: 100,
      height: 100,
    },
})

export default UserImagePicker;
