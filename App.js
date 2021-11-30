import React from 'react';
import 'react-native-gesture-handler';
import NavPage from './components/NavPage'
import ValueProvider from './components/ValueContext';


export default function App() {

  const userData =
  {
    name: "zihao",
    email:"zliu927@brandeis.edu",
    appURL: 'https://glacial-hamlet-05511.herokuapp.com',
    secret: "",
    userList: [],
  }


  return (
    <ValueProvider value={userData}>
      <NavPage />
    </ValueProvider>
  )
}
