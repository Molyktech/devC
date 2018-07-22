import React, { Component } from 'react'
import { View, StyleSheet, Text } from 'react-native';

export default class Explore extends Component {
  render() {
    return (
      <View style={styles.container}>
          <Text>Explore</Text>
        
      </View>
    )
  }
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });