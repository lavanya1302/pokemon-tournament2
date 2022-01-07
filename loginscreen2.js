import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>Welcome To Login Screen</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container:{ 
    alignSelf: 'center', 
    marginTop: 100 
    }
})
 firebase.auth().signInWithEmailAndPassword(email, password)
          .then((userCredential) => {
            
            var user = userCredential.user;
            
          })
          .catch((error) => {
            Alert.alert("user dosen't exists")
        console.log("doesn't exist")
          });
          firebase.auth().signOut().then(() => {
            
          }).catch((error) => {
            Alert.alert("user dosen't exists")
        console.log("doesn't exist")
          });