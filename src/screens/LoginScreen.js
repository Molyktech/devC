import React, { Component } from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';

export default class LoginScreen extends Component {

    static navigationOptions = {
        header: null
    }
  render() {
    return (
      < KeyboardAvoidingView behavior="padding" enabled style={styles.container}>                
       <LinearGradient
          start={{ x: 0.0, y: 0.25 }} end={{ x: 0.5, y: 1.0 }}
          locations={[0.4, 0.4]}
          colors={['#013A6B', '#004E95']}
          style={styles.container}
       >   

        <Text style={styles.header}> W</Text>
        
        <TextInput 
           style={styles.input}
           placeholder='Username'
           underlineColorAndroid={'transparent'}
           leftIcon={
             <Icon
               name='user'
               size={24}
               color='black'
             />
           }
        />
        
        
        <TextInput 
           style={styles.input}
           placeholder='Password'
           underlineColorAndroid={'transparent'}
           //secureTextEntry:true
           leftIcon={
             <Icon
               name='user'
               size={24}
               color='black'
             />
           }
        />
       
        <TouchableOpacity 
          style={styles.button}
          onPress={() => this.props.navigation.navigate('Main')}
        >
          <Text 
          style={styles.btnText}
         
          >Login</Text>
        </TouchableOpacity>
        <Text style={styles.text}>Forgot Password?</Text>
        <Text style={styles.text}
        onPress={() => this.props.navigation.navigate('Signup')}
        >
        Create an Account?</Text>
        
      
             
    </LinearGradient>
</KeyboardAvoidingView>
     
    );
  }
}
const styles = StyleSheet.create({
    container: {
        height: '100%',
        backgroundColor: '#013A6B',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'stretch',
      },
      header: {
        color: 'white',
        fontWeight: '300',
        fontSize: 100,
    },
      input: {
        width: '80%',
        height: 40,
        borderBottomColor: '#fff',
        borderBottomWidth: 1,
        color: '#fff',
        marginBottom: 30,
    },
      button: {
      alignItems: 'center',
      backgroundColor: '#C4C4C4',
      padding: 15,
      marginTop: 30,
      borderRadius: 6,
      width: 200,
    },
    btnText: {
      color: '#fff',
      fontWeight: 'bold'

    },
    text: {
      marginTop: 20,
      color: '#FFF',
      
    }

});