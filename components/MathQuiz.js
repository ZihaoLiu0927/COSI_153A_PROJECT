import React, { useState, useEffect }  from 'react';
import { View, Button,
         FlatList, StyleSheet,
         Text, TextInput } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const MathResult = (props) => {
  const [textInput, setTextInput] = useState("")
  const [correct,setCorrect] = useState(0)
  const [total,setTotal] = useState(0)
  const [ratio,setRatio] = useState(0)
  const [num1,setNum1]= useState("")
  const [num2,setNum2]= useState("")
  const [ans, setAns] = useState("")
  const [debug, setDebug] = useState(false)
  const [checked, setChecked] = useState(false)
  const [rightAns, setRightAns] = useState(0)
  const [isCorrect, setIsCorrect] = useState(false)

  useEffect(() => {getData()},[])
  useEffect(() => {generateRandomNumber()}, [])
  useEffect(() => {setRatio(parseFloat(correct/total, 4).toPrecision(4) * 100)})
  useEffect(() => {saveAsyncData()})

  const debugView =
    (<View>
      <Text style={styles.debug}>
        DEBUGGING INFO
      </Text>
      <Text>
         ans is ({ans})
      </Text>
      <Text>
         number 1 is ({num1})
      </Text>
      <Text>
         number2 is ({num2})
      </Text>
      <Text>
         isCorrect is ({String(isCorrect)})
      </Text>
      <Text>
         right answer is ({rightAns})
      </Text>
      <Text>
        checked is ({String(checked)})
      </Text>
      <Text>
        correct is ({String(correct)})
      </Text>
      <Text>
        total is ({String(total)})
      </Text>

  </View>);

  const getData = async () => {
        try {
          // the '@mathQuiz' can be any string
          const jsonValue = await AsyncStorage.getItem('@mathQuiz')
          let data = null
          if (jsonValue!=null) {
            data = JSON.parse(jsonValue)
            setCorrect(data.correct)
            setTotal(data.total)
            console.log('load previous counts')
          } else {
            console.log('cannot load previous counts')
            // this happens the first time the app is loaded
            // as there is nothing in storage...
            setCorrect(0)
            setTotal(0)
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
          await AsyncStorage.setItem('@mathQuiz', jsonValue)
          console.log('just stored '+jsonValue)
        } catch (e) {
          console.log("error in storeData ")
          console.dir(e)
          // saving error
        }
  }

  const saveAsyncData = () => {
    const newCounts =
      {correct:correct,
         total:total}
    storeData(newCounts);
  }

  const clearAll = async () => {
        try {
          console.log('in clearData')
          await AsyncStorage.clear()
        } catch(e) {
          console.log("error in clearData ")
          console.dir(e)
          // clear error
        }
  }

  const generateRandomNumber = () => {
    var randomNumber1 = Math.floor(Math.random() * props.n) + 1;
    setNum1(randomNumber1);
    var randomNumber2 = Math.floor(Math.random() * props.n) + 1;
    setNum2(randomNumber2);
    setRightAns(randomNumber1*randomNumber2);
}

  const checkAns = async() => {
    if(rightAns == ans) {
      setIsCorrect(true)
      setCorrect(correct+1)
    } else {
      setIsCorrect(false)
    }
    setTotal(total+1)
  };


  /* synchronous processing problem in this way?
   the line hecked? setChecked(false) : setChecked(true) is executed with the if-else statement
  const processClick = async() => {
    checked? setChecked(false) : setChecked(true);
    if (checked) {
      checkAns()
      } else {
      generateRandomNumber()
      setTextInput("")
    }
  }; */


  const processClick = async() => {
    if (!checked) {
      setChecked(true);
      checkAns()
      } else {
      setChecked(false)
      generateRandomNumber()
      setTextInput("")
    }
  };


  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>Math Quiz for numbers between 0 and {props.n}</Text>
      <Text style={{fontSize: 30, padding: 10}}>Calculate the product of the following two numbers: </Text>


      <View style={{flex: 2, backgroundColor: "#ffb3b3"}}>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.formula}> {num1} * {num2} = </Text>
          <TextInput style={{flex: 4, fontSize:32, paddingLeft: 0}}
                      placeholder = "???"
                      value = {textInput}
                      onChangeText={text => {[setAns(parseInt(text)),
                                              setTextInput(text)]}}/>
          <Text style={{flex: 4}}/>
        </View>

        {checked &&
          <Text style={{fontSize: 20, color: '#00ace6', paddingLeft: 10}}>
            {isCorrect?"Correct!":"Sorry, answer was " + rightAns + ", try again!"}
          </Text>}
        <View style={{width: "15%", color: 'white', paddingLeft: 45, paddingTop: 20}}>
          <Button
            color = {checked?"green":"red"}
            title={checked?"NEXT QUESTION":"CHECK ANSWER"}
            onPress= {() => {processClick()}}
             />
        </View>
      </View>

      <View style={{flex: 2, paddingTop: 10, backgroundColor: "#b3ffec"}}>
        <Text> Correct: {correct} </Text>
        <Text> Answered: {total} </Text>
        <Text> Percent Correct: {ratio} </Text>
        <View style={{width: "15%", color: 'white', paddingTop: 10}}>
          <Button
            title={debug?"CLOSE DEBUG INFO":"SHOW DEBUG INFO"}
            onPress={() => {setDebug(debug?false:true)}}
             />
        </View>
        {debug?debugView: <Text></Text>}
      </View>

    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'column',
    backgroundColor: '#eee',
    justifyContent: 'center',
    textAlign:'left',
    marginTop:20,
    padding:20,
  },

  debug: {
    textAlign:'center',
    backgroundColor:'#00cc66',
    fontSize: 32,
    padding:10,
    color: 'white'
  },


  headerText: {
    textAlign:'center',
    backgroundColor:'#aaa',
    fontSize: 32,
    padding:10,
    color: 'blue'
  },

  formula: {
    flex: 1,
    color: 'white',
    padding: 10,
    fontSize: 32,
  },

  button: {
    width: "15%",
    color: 'white',
    padding: 20,
  }
});

export default MathResult;
