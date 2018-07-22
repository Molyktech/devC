//import libraries for making a component
import React, { Component } from 'react';
import { Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo';
//import { createBottomTabNavigator }from 'react-navigation';
// import Icon from 'react-native-vector-icons/Ionicons'; //Already available to us in expo
// //import { Ionicons } from '@expo/vector-icons';
// import LoginScreen from './LoginScreen';
// import SignupScreen from './SigupScreen';

// make a component

 export default class LandingScreen extends Component {
  static navigationOptions = {
    header: null
}
    render() {
      return (
        <LinearGradient
        start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
        locations={[0.4, 0.4]}
        colors={['#013A6B', '#004E95']}
        style={styles.container}
>
                
        <Text style={styles.text}> W</Text>
        <Text style={styles.action}
        onPress={() => this.props.navigation.navigate('Signup')}
        > Tap Here To Get Started</Text>
             
        </LinearGradient>
      )
    }
  };
          
/*export default createBottomTabNavigator({
    Login: {
       screen: LoginScreen,
        navigationOptions: {
            tabBarLabel: 'Login',
            tabBarIcon: ({tintColor}) => (
                <Icon name="ios-log-in" color= {tintColor} size={24} />
            )
        }
    },
    Signup : {
       screen: SignupScreen,
        navigationOptions: {
            tabBarLabel: 'Signup',
            tabBarIcon : ({ tintColor}) => (
                <Icon name='ios-sign-in'  color={tintColor} size={24} />
            )
        }
    }

}, {
    initialRouteName: 'Signup',
    order: ['Signup', 'Login'],
    navigationOptions: {
        tabBarVisible: true
    },
    tabBarOptions:{
        activeTintColor: 'fuchsia',
        inactiveTintColor: 'magenta'
    }
})*/


const styles = StyleSheet.create({
        container: {
          width: '100%',
          height: '100%',
          backgroundColor: '#013A6B',
          //backgroundColor: 'linear-gradient(110deg, #013A6B 50%, #004E95 50%)',
          alignItems: 'center',
          justifyContent: 'center',
          
        },

        text: {
                color: 'white',
                fontWeight: '300',
                fontSize: 100,
        },
        action: {
          color:'#fff',
          alignItems: 'center',
          fontSize: 30,
         // marginLeft: 

        }
      });
