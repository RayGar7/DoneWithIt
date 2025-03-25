import React, { useEffect, useState } from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import Screen from './app/components/Screen';
import { Text } from 'react-native';
import { Button } from 'react-native-web';
import { NavigationContainer } from '@react-navigation/native';
import navigationTheme from './app/navigation/navigationTheme';
import AuthNavigator from './app/navigation/AuthNavigator';
import AppNavigator from './app/navigation/AppNavigator';

import routes from './app/navigation/routes';

const Link = () => {
  const navigation = useNavigation();

  return (
    <Button
      title="Click"
      onPress={() => navigation.navigate(routes.TWEET_DETAILS, { id: 1 })} />
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
  <Stack.Navigator>
    <Stack.Screen 
      name="Tweets" 
      component={Tweets}
      options={{
        headerStyle: { backgroundColor: 'dodgerblue' },
        heraderTintColor: 'dodgerblue',
        headerShown: false,
      }} >
    </Stack.Screen>
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options={({ route }) => ({ title: route.params.id })}
      />
  </Stack.Navigator>
);

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Feed" 
      component={FeedNavigator}/>
    <Tab.Screen name="Account" component={AccountNavigator} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AppNavigator />
    </NavigationContainer>
  );
}
