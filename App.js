import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';


import MealsNavigator from './navigation/MealsNavigator';
import AppLoading from 'expo-app-loading';
import * as Font from 'expo-font' 
import {enableScreens} from 'react-native-screens'  //or enableScreens
//apploading
//expofont
//install react navigation - for native apps - version 3/4 - smooth experince -npm install --save react-navigation
//install expo navigation long dependencies -expo install-------
//expo install react-native-gesture-handler react-native-reanimated -3x
//npm install --save react-navigation/-stack
//install react-native-screens
//install createBottomTabNavigator - react-navigation-tabs
//npm install --save react-navigation-header-buttons
//                   @expo-vector/icons
//npm                react-navigation-material-bottom-tabs
//npm                react-native-paper

//load Async returns a promise

enableScreens()

const fetchFonts = () => {
  return Font.loadAsync({
    'open-sans' : require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold' : require('./assets/fonts/OpenSans-Bold.ttf')
  })
}


 export default function App() {

  const [dataLoaded,setDataLoaded] = useState(false)

  if(!dataLoaded){
    return (
    <AppLoading 
    startAsync={fetchFonts} 
    onFinish={()=>setDataLoaded(true)} 
    onError={(err) => console.log(err)}
    />
    )
  }

    return (
    <MealsNavigator/>
  );

}

const styles = StyleSheet.create({
  screen:{
    flex:1,
  },
  
});
