import React, { Component } from 'react';
import { Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { LinearGradient } from 'expo';

export default class SignupScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            email: '',
            password: '',
            passwordTwo: '',
            Error: ''

        };
    }
   
    submitForm = () => {
        const { username, email, password, passwordTwo } = this.state;
        if (!username) {
            this.setState({ Error: 'Please type in a username' });
        }
        else if (!email) {
            this.setState({ Error: 'please enter your email adress' });
        }
        else if (!password) {
            this.setState({ Error: 'please type in a secure password' });
        }
        else if (!passwordTwo) {
            this.setState({ Error: 'please confirm your password' });
        }
        else {
            this.props.navigation.navigate('Main')
            alert('registration complete!');
        }
        const textInput = this.refs.textInput;

       
        textInput.clear();
    }
    static navigationOptions = {
        header: null
    }
    render() {
        const { container, header, button, btnText, error } = styles;
        
        return (
            <KeyboardAvoidingView style={container} behavior="padding" enabled>
            <LinearGradient
            start={{ x: 0.45, y: 0.0 }} end={{ x: 0.1, y: 1.2 }}
            locations={[0.4, 0.4]}
            colors={['#013A6B', '#004E95']}
            style={container}
            > 
           
                <Text style={header}>W</Text>
                <Text style={error}>{this.state.Error}</Text>

                <TextInput  
                    ref="textInput"
                    style={styles.input}
                    placeholder='Username'
                    underlineColorAndroid={'transparent'}
                    onChange={username => this.setState({ username })}
                />
                <TextInput  
                ref="textInput"
                style={styles.input}
                placeholder='Email'
                underlineColorAndroid={'transparent'}
                onChange={email => this.setState({ email })}
                />
                <TextInput  
                ref="textInput"
                style={styles.input}
                placeholder='Password'
                underlineColorAndroid={'transparent'}
                secureTextEntry={true}
                onChange={password => this.setState({ password })}
                />
                <TextInput  
                ref="textInput"
                style={styles.input}
                placeholder='Confirm Password'
                underlineColorAndroid={'transparent'}
                onChange={passwordTwo => this.setState({ passwordTwo })}
                />
                <TouchableOpacity style={button} onPress={this.submitForm}>
                    <Text style={btnText}>Sign Up</Text>
                </TouchableOpacity>

                <Text onPress={() => this.props.navigation.navigate('Login')} 
                style={styles.text}>
                    Already have an account? Login.
                </Text>
                
            
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
        width: '100%',
    },
    header: {
        color: 'white',
        fontWeight: '300',
        fontSize: 100,
    },

    input: {
        width: '70%',
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
    error: {
        color: 'red',
        fontSize: 20,
    },
    text: {
        marginTop: 20,
        color: '#FFF',
        
      }
  
});