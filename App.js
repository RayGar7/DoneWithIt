import React, { useState } from 'react';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import { GestureHandlerRootView, TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';

export default function App() {
  console.log('App executed');

  const [firstName, setFirstName] = useState('');

  return (
    <GestureHandlerRootView>
      <Screen>
        <Text>{ firstName }</Text>
        <AppTextInput 
          onChangeText={text => setFirstName(text)}
          placeholder="Username" 
          icon="email" 
          style={{
            borderBottomColor: '#ccc',
            borderBottomWidth: 1,
            height: 40,
            fontSize: 20
          }}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
