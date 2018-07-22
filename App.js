import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from 'react-navigation';
//import { createDrawerNavigator } from 'react-navigation';

import LandingScreen from './src/screens/LandingScreen';
import LoginScreen from './src/screens/LoginScreen';
import SignupScreen from './src/screens/SigupScreen';
import HomeScreen from './src/screens/HomeScreen';
import MainScreen from './src/screens/MainScreen';

export default class App extends Component {
  render() {
    return (
     <AppNavigator />
     
    );
  }
}
const AppNavigator = createStackNavigator({
  Landing: LandingScreen,
  Signup: SignupScreen,
  Login: LoginScreen,
  Main: MainScreen

},{
  
});

// const AppDrawerNavigator = createDrawerNavigator({
//   Home: HomeScreen,
  
// })
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
