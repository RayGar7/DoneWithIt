import React, { useState, useEffect } from 'react';
import { Text, StyleSheet } from 'react-native';
import ListingEditScreen from './app/screens/ListingEditScreen';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import NetInfo, { useNetInfo } from '@react-native-community/netinfo';
import AppButton from './app/components/AppButton';
import { MaterialCommunityIcons } from '@expo/vector-icons';


import Screen from './app/components/Screen';
import AuthNavigator from './app/navigation/AuthNavigation';
import AppNavigator from './app/navigation/AppNavigator';
import navigationTheme from './app/navigation/navigationTheme';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import OfflineNotice from './app/components/OfflineNotice';
import AuthContext from './app/auth/context';
import { jwtDecode } from 'jwt-decode';
import authStorage from './app/auth/storage';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [user, setUser] = useState();
  const [isReady, setIsReady] = useState(false);


  const restoreToken = async () => {
    const token = await authStorage.getToken();
    if (!token) {
      console.log("No token found");
      setUser(null);
      return; 
    }
    try {
      setUser(jwtDecode(token));
      SplashScreen.hideAsync(); 
    } catch (error) {
      console.log("Error decoding token", error);
    }
  }

  useEffect(() => {
    const prepareApp = async () => {
      try {
        await restoreToken(); // Restore the token
      } catch (error) {
        console.log("Error during app initialization:", error);
      } finally {
        setIsReady(true); // Mark the app as ready
        SplashScreen.hideAsync(); // Hide the splash screen
      }
    };

    prepareApp();
  }, []);

  if (!isReady) {
    return null;
  }

  return (
    <AuthContext.Provider value={{ user, setUser }}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <OfflineNotice />
        <NavigationContainer theme={navigationTheme}>
          {user ? 
            (<AppNavigator />)
          : 
            (<AuthNavigator />)
          }
        </NavigationContainer>
      </GestureHandlerRootView>
    </AuthContext.Provider>
  );
}


const styles = StyleSheet.create({
  scene: {
    flex: 1,
    justifyContent: 'center',
    aligntItems: 'center'
  },
});