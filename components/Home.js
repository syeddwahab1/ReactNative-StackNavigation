import {View, StyleSheet, Text, Button, TextInput} from 'react-native';
import React from 'react';

export const Home = props => {
  console.warn(props.route.params);
  const {name, age} = props.route.params;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Home Screen</Text>
      <Text style={{fontSize: 30}}>{name}</Text>
      <Text style={{fontSize: 30}}>{age}</Text>
    </View>
  );
};
