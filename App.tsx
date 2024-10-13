/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React,{useEffect} from 'react';
import {SafeAreaView,StyleSheet,Text,View,Platform} from 'react-native';
import SplashScreen from 'react-native-splash-screen';
// import Intro from './src/screens/intro/intro';
// import Signup from './src/screens/authen/Signup'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native';
import StackNavigation from './src/navigation';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const myTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background:'#fff'
  }
}
function App() {
  useEffect(() => {
    if (Platform.OS === "android") { SplashScreen.hide(); }
  }, []);
  return (
    <View style={{flex:1}}>
    <NavigationContainer theme={myTheme}>
      <StackNavigation/>
      </NavigationContainer>
      </View>
  );
};
export default App;
