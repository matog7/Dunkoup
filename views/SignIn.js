import * as React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, SafeAreaView, TextInput } from 'react-native';

export default function SignIn({ navigation }) {
    const [text, onChangeText] = React.useState('Nom licencié');
    const [number, onChangeNumber] = React.useState('');
    return (
        <View style={styles.container}>
        <Text style={styles.text}>DUNKOUP - Sign in</Text>
        <StatusBar style="auto"/>
        <SafeAreaView style={styles.safeArea}>
            <TextInput
                style={styles.input}
                onChangeText={onChangeText}
                value={text}
            />
            <TextInput
                style={styles.input}
                onChangeText={onChangeNumber}
                value={number}
                placeholder="licence"
                keyboardType="numeric"
            />
        </SafeAreaView>
        <Button style={styles.button} title="Sign in" />
        </View>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: '#021e36',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  }, 
  button: {
    color: '#021e36',
    fontSize: 40,
    fontWeight: 'bold',
    textDecorationStyle: 'none'
  },
  safeArea: {
    marginBottom: 40
  }, 
  // input: {
  //   height: 10,
  //   margin: 5,
  //   borderWidth: 0.25,
  //   borderRadius: 5,
  //   padding: 10,
  // },
});
