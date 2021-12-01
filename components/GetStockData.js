import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, FlatList} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Axios from 'axios';

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
  const getData = async (symbol, range) => {
      let res = [];
      let interval = "";
      let APIKEY = "QQ3by7yyYj2FDH4vHllM92caW8KJ3LDf3jpEeQ8v";
      //let APIKEY = "";

      // let startDay = dateString(start);
      // // Convert the start date to the proper format
      // // Create the new end date
      // const end = new Date(start);
      // end.setDate(start.getDate() + 1);
      // // let endDay = dateString(end);
      //
      // // Convert the end date to the proper format
      // // Combine the dates into the right string format
      // let startString = startDay.year + "-" + startDay.month + "-" + startDay.day;
      // let endString = endDay.year + "-" + endDay.month + "-" + endDay.day;

      if (range == "1D") {
        range = "1d"
        interval = "1m"
      } else if (range == "1W") {
        range = "5d"
        interval = "15m"
      } else if (range == "1M") {
        range = "1mo"
        interval = "1d"
      } else if (range == "3M") {
        range = "3mo"
        interval = "1wk"
      } else if (range == "6M") {
        range = "6mo"
        interval = "1wk"
      } else if (range == "ALL") {
        range = "10y"
        interval = "1mo"
      }

      try{

        let option = {
          method: 'GET',
          url: 'https://yfapi.net/v8/finance/chart/' + symbol + '?comparisons=' + symbol + '&range=' + 'range' + '&region=US&interval=' + interval + '&lang=en&events=div%2Csplit',
          params: {modules: 'defaultKeyStatistics,assetProfile'},
          headers: {
            'x-api-key': APIKEY,
          }
        };

        const response = await Axios.request(option);
        // const response = await fetch(
        //   "https://api.polygon.io/v2/aggs/ticker/" + symbol + "/range/1/" + unit + "/" + startString + "/" + endString + "?adjusted=false&sort=asc&limit=10000&apiKey=" + APIKEY
        // );
        if (response.data) {
          let data = response.data.chart.result[0].indicators.quote[0];
          let open = data.open;
          let high = data.high;
          let low = data.low;
          let close = data.close;
          let volume = data.volume;
          let timestamp = response.data.chart.result[0].timestamp

          for(let i = 0; i < open.length; i++){
            res.push({
                index: i,
                open: open[i],
                high: high[i],
                low: low[i],
                close: close[i],
                volume: volume[i],
                timestamp: new Date(timestamp[i])
            });
          }
        }
      }
      catch(e) {
          console.log("error in getData ")
          console.dir(e)
          // error reading value
      }
      console.log(res)
      return res;
  }

  const getNews = async (symbol) => {
    let res = [];
    let APIKEY = "QQ3by7yyYj2FDH4vHllM92caW8KJ3LDf3jpEeQ8v";
    //let APIKEY = "";
    try {
      let option = {
        method: 'GET',
        url: 'https://yfapi.net/ws/insights/v1/finance/insights?symbol=' + symbol,
        params: {modules: 'defaultKeyStatistics,assetProfile'},
        headers: {
          'x-api-key': APIKEY,
        }
      }

        const news = await Axios.request(option);

        if (news.data) {
          res = news.data.finance.result.reports;
        }

    }
    catch(e) {
      console.log("error in get stock related news")
      console.dir(e)
    }

    return res;
  }


  export {dateString, getData, getNews};
