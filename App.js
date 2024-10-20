/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home} from './components/Home';
import { Login } from './components/Login';

const Stack = createNativeStackNavigator();
const App = () => {
  const BtnAction = () => {
    console.warn('Button Pressed');
  };
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            headerTitle: () => <Button title="Left" onPress={BtnAction} />,
            headerRight: () => <Header />,
            title: 'User Login',
            headerStyle: {backgroundColor: 'blue'},
          }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: 'Home Page',
            headerStyle: {backgroundColor: 'blue'},
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};
const Header = () => {
  return <TextInput placeholder="Name" />;
};

export default App;
