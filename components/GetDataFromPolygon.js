import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


  const dateString =(d)=> {
      // If the day is less than 10, add a 0
      let dString = null;
      if (d.getDate() < 10) {
          dString = '0' + d.getDate();
      } else {
          dString = d.getDate();
      }

      // If the month is less than 10, add a 0
      let mString = null;
      if (d.getMonth() < 10) {
          mString = '0' + d.getMonth();
      } else {
          mString = d.getMonth();
      }

      // Get the year string
      let yString = d.getFullYear();

      //Put it all together in an object
      let res = {
          month: mString,
          day: dString,
          year: yString
      }

      //Return the formatted date string
      return res;
  }


// Pass a date and a valid currency symbol into this function
// start is a date object and symbol is a stock symbol;
  const getData = async (start, symbol, unit) => {
      let res = [];
      let APIKEY = "IPmAgPfmEHEspE7y38fMFfhpo8ZdrOzv";

      // If no currency is passed in, default to Bitcoin
      if (!symbol) {
          symbol = "BTCUSD";
      }

      let startDay = dateString(start);
      // Convert the start date to the proper format
      // Create the new end date
      const end = new Date(start);
      end.setDate(start.getDate() + 1);
      let endDay = dateString(end);

      // Convert the end date to the proper format
      // Combine the dates into the right string format
      let startString = startDay.year + "-" + startDay.month + "-" + startDay.day;
      let endString = endDay.year + "-" + endDay.month + "-" + endDay.day;

      try{
        const response = await fetch(
          "https://api.polygon.io/v2/aggs/ticker/" + symbol + "/range/1/" + unit + "/" + startString + "/" + endString + "?adjusted=false&sort=asc&limit=10000&apiKey=" + APIKEY
        );
        const json = await response.json();
        if (json.results) {
          res = json.results
        }
      }
        catch(e) {
          console.log("error in getData ")
          // this shouldn't happen, but its good practice
          // to check for errors!
          console.dir(e)
          // error reading value
      }
      return res;
  }
  export {dateString, getData};
