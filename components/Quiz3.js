import React, { useState, useEffect, Component }  from 'react';
import { View, Button,
         StyleSheet,
         Text, TextInput } from 'react-native';


export default function Quiz3() {

  const [radius, setRadius] = useState(0);
  const [height, setHeight] = useState(0);
  const [area, setArea] = useState(0);
  const [volume, setVolume] = useState(0);
  const [gallon, setGallon] = useState(0);
  const [showRes, setShowRes] = useState(false);
  const [report, setReport] = useState(" ");

  useEffect(() => {[checkRadiusNaN(),
                    setArea(parseFloat(Math.PI*Math.pow(radius,2))),
                    setVolume(parseFloat(height*Math.PI*Math.pow(radius,2))),
                    setGallon(parseFloat(height*Math.PI*Math.pow(radius,2)*0.004329))
                    ]}, [radius, height])
  const showResult =()=> {
    setReport(gallon.toFixed(2))
  }

  const toggleResult =()=> {
    setShowRes(!showRes);
  }

  const checkRadiusNaN =()=> {
    if (isNaN(radius)) {
      setRadius(0)
    }
    if (isNaN(height)) {
      setHeight(0)
    }
  }




  let section1 = (
   <View style={{flex: 1, flexDirection: "row"}}>
      <View style={{flex: 5, flexDirection: "column", backgroundColor: "lightgreen"}}>
        <Text style={{fontSize: 90}}> Quiz 3 </Text>
        <Text style={{fontSize: 20}}>CS153a Fall</Text>
        <Text style={{fontSize: 20}}>Write the code for this App, including the text!</Text>
      </View>
      <View style={{flex: 1, backgroundColor: "white"}}>
      </View>
    </View>
  )


  let section2 = (
    <View style={{flex: 1}}>
      <Text style={{fontSize: 23}}>
        Enter the radius and the height of a cylinder in inches and we will calculate the volume in gallons. A 6 inch radius and 12 inch height will have volume 5.88. Divide cubic inches by 231 to get gallons, and show only 2 digits after the decimal point in the volume.
      </Text>
    </View>
  )

  let section3 = (
    <View style={{flex: 1}}>
      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "pink"}}>
          <Text style={{fontSize: 17, fontColor: "white"}}> radius: </Text>
        </View>
        <View style={{flex: 5, backgroundColor: "pink"}}>
          <TextInput style={{fontSize:20, paddingLeft: 0}}
                      placeholder = ""
                      keyboardType = "number-pad"
                      onChangeText={text => {setRadius(parseInt(text))}}/>
        </View>
        <View style={{flex: 4, flexDirection: "row"}}>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: "row", paddingTop: 1}}>
        <View style={{flex: 1, backgroundColor: "pink"}}>
          <Text style={{fontSize: 17, fontColor: "white"}}> height: </Text>
        </View>
        <View style={{flex: 5, backgroundColor: "pink"}}>
          <TextInput style={{fontSize:20, paddingLeft: 0}}
                      placeholder = ""
                      keyboardType = "number-pad"
                      onChangeText={text => {setHeight(parseInt(text))}}/>
        </View>
        <View style={{flex: 4, flexDirection: "row"}}>
        </View>
      </View>

      <View style={{flex:1.5, flexDirection: "row"}}>
        <View style={{flex: 1.5, paddingTop: 1}}>
          <Button title = "CALCULATE VOLUME" color = "green" onPress={()=>showResult()}/>
        </View>
        <View style={{flex: 3}}>
        </View>
      </View>

      <View style={{flex: 1, flexDirection: "row"}}>
        <View style={{flex: 1, backgroundColor: "pink"}}>
          <Text> The volume is {report} gallons </Text>
        </View>
        <View style={{flex: 1, flexDirection: "row"}}>
        </View>
      </View>

      <View style={{flex: 2, flexDirection: "row"}}>
        <View style={{flex: 1.5, paddingTop: 1}}>
          <Button title = {showRes? "TOGGLE CALCULATION VIEW" : "EXPAND CALCULATION VIEW"} color = "#3399ff" onPress={()=>toggleResult()}/>
        </View>
        <View style={{flex: 1}}>
        </View>
      </View>
    </View>
  )

  let section4 = (
    <View style={{flex: 1}}>
      <Text style={styles.detailResult}> radius = {radius} inches</Text>
      <Text style={styles.detailResult}> height = {height} inches</Text>
      <Text style={styles.detailResult}> area of base = pi*r^2 = {area} </Text>
      <Text style={styles.detailResult}> volumn of cylinder = {volume} cubic inches </Text>
      <Text style={styles.detailResult}> volumn of cylinder = {gallon} gallons </Text>
    </View>
  )

  return (
    <View style = {styles.container}>
      {section1}
      {section2}
      {section3}
      {showRes? section4 : <View style={{flex: 1}}/>}
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: 600,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'stretch',
    flexDirection:'column',
    border:'thick solid black',
  },

  detailResult: {
    fontSize: 20,
  }

});
