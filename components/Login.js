import {View, Text, Button, TextInput} from 'react-native';
import React, {useState} from 'react';
export const Login = props => {
  const [name, setName] = useState('');
  const age = 22;
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 30}}>Login Screen</Text>
      <TextInput
        placeholder="Enter name"
        onChangeText={text => setName(text)}
      />
      <Button
        title="Go to Homepage"
        onPress={() =>
          props.navigation.navigate('Home', {name: name, age: age})
        }
      />
    </View>
  );
};
