import React, { useState } from 'react';
import { Text } from 'react-native';
import Screen from './app/components/Screen';
import { GestureHandlerRootView, Switch, TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';

export default function App() {
  console.log('App executed');


  return (
    <LoginScreen />
  );
}
