import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class SignUpScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello Sign Up here!!!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
    marginTop: 100,
  },
});