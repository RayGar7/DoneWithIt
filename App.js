import React, { useEffect, useState } from 'react';
import { Text } from 'react-native';
import { Button, Image } from 'react-native';
import Screen from './app/components/Screen';
import { GestureHandlerRootView, Switch, TextInput } from 'react-native-gesture-handler';
import AppTextInput from './app/components/AppTextInput';
import AppPicker from './app/components/AppPicker';
import LoginScreen from './app/screens/LoginScreen';
import RegisterScreen from './app/screens/RegisterScreen';
import ListingEditScreen from './app/screens/ListingEditScreen';
import * as ImagePicker from 'expo-image-picker';
import AppText from './app/components/AppText';

export default function App() {
  console.log('App executed');
  const [imageUri, setImageUri] = useState();
  console.log("imageUri:", imageUri);

  const requestPermission = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      alert('You need to enable permission to access the library');
    }
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) {
        setImageUri(result.uri);
        console.log("result.uri:", result.uri);
      }
    } catch (error) {
      console.log(error);
    }
  }

  return <Screen>
    <Button title="Select Image" onPress={selectImage}></Button>
      {
        imageUri &&  
        ( <Image source={{uri: imageUri}} style={{width: 200, height: 200}} /> )
      }
      <AppText>
        {imageUri ? imageUri : 'No image selected'}
      </AppText>
  </Screen>;

}
