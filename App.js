import React from 'react';
import 'react-native-gesture-handler';
import NavPage from './components/NavPage'
// import UserImagePicker from './components/ImagePicker.js'

import UserProfile from './components/UserProfile'
import MyChart from './components/balanceChart'
import StockListElement from './components/StockListElement'
import SelectStock from './components/SelectStock'
import GetDataFromPolygon from './components/GetDataFromPolygon'

export default function App() {

  return (
    <NavPage />
    //<SelectStock />
    //<UserProfile />
    //<GetDataFromPolygon />
  )
}
