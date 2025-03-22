import React, { useEffect, useState } from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack';

import Screen from './app/components/Screen';
import { Text } from 'react-native';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate("TweetDetails", { id: 1})} />
  );
}

const Tweets = () => {
  <Screen>
    <Text>Tweets</Text>
    <Link />
  </Screen>
};

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details {route.params.id}</Text>
  </Screen>
);

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator initialRouteName="Tweets">
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options={({ route }) => ({ title: title.params.id })}
      />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
