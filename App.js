import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import ViewImageScreen from './app/screens/ViewImageScreen';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import WelcomeScreen from './app/screens/WelcomeScreen';
import ListingDetailsScreen from './app/screens/ListingDetailsScreen';
import MessagesScreen from './app/screens/MessagesScreen';
import Screen from './app/components/Screen';
import Icon from './app/components/Icon';
import ListItem from './app/components/ListItem';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  console.log('App executed');
  return (
    <GestureHandlerRootView>
      <Screen>
        <ListItem 
          title="My Title" 
          subTitle="My Subtitle" 
          ImageComponent={<Icon name="email" />}
        />
      </Screen>
    </GestureHandlerRootView>
  );
}
