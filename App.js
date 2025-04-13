import React from 'react';
import { Text } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const Link = () => {
  const navigation = useNavigation();
  return (
    <Screen>
      <Text>Tweets</Text>
      <AppButton 
        title="View Tweet"
        onPress={() => navigation.navigate("TweetDetails", { id: 1})} 
      />
    </Screen>
  )
}

const Tweets = ({ navigation }) => (
  <Screen>
    <Text>Tweets</Text>
    <AppButton 
      title="View Tweet" onPress={() => navigation.push("Tweets")}
    />
  </Screen>
);

const TweetDetails = ({ route }) => (
  <Screen>
    <Text>Tweet Details</Text>
    <Text>{route.params.id}</Text>
  </Screen>
)

const Stack = createStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name="Tweets" component={Tweets} />
    <Stack.Screen 
      name="TweetDetails" 
      component={TweetDetails} 
      options={({ route }) => ({ title: route.params.id })} 
    />
  </Stack.Navigator>
);

const Account = () => <Screen><Text>Account</Text></Screen>

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator>
    <Tab.Screen 
      name="Feed" 
      component={Tweets} 
      options={{
        tabBarIcon: ({ size, color }) => (
          <MaterialCommunityIcons name="home" color={color} size={size} />
        ),
      }}
    />
    <Tab.Screen name="Account" component={Account} />
  </Tab.Navigator>
);

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer theme={navigationTheme}>
        <AppNavigator />
      </NavigationContainer>
    </GestureHandlerRootView>
  );
}
