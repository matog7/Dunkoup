import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './views/Home';
import Login from './views/Login';
import SignIn from './views/SignIn';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: true, title: 'Inscription' }}/>
        <Stack.Screen name="Sign in" component={SignIn} options={{ headerShown: true, title: 'Connexion' }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
