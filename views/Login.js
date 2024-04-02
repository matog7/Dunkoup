import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Login({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DUNKOUP - Log in</Text>
      <StatusBar style="auto"/>
      <Button style={styles.button} title="Sign in" onPress={() => navigation.navigate('Sign in')}/>
      <Button style={styles.button} title="Sign up" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    
  },
  text: {
    color: '#021e36',
    fontSize: 40,
    fontWeight: 'bold',
  }, 
  button: {
    color: '#021e36',
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationStyle: 'none',

  }
});
