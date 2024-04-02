import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>DUNKOUP</Text>
      <StatusBar style="auto"/>
      <Button style={styles.button} title="Login" onPress={() => navigation.navigate('Login')}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ff7700',
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