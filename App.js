import React from 'react';
import ListingEditScreen from './app/screens/ListingEditScreen';
 import * as ImagePicker from "expo-image-picker";
 import * as Permissions from "expo-permissions";
import { useEffect, useState } from "react";
import AppButton from "./app/components/AppButton";
import ImageInput from "./app/components/ImageInput";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

 import Screen from "./app/components/Screen";

export default function App() {
  const [imageUri, setImageUri] = useState();
  const requestPermission = async () => {

    const { granted } = await ImagePicker.requestCameraRollPermissionsAsync();
    if (!granted) alert("You need to enable permission to access the library.");
  };

  useEffect(() => {
    requestPermission();
  }, []);

  const selectImage = async () => {
    try {
      const result = await ImagePicker.launchImageLibraryAsync();
      if (!result.canceled) 
        setImageUri(result.uri);
      
    } catch (error) {
      console.log("Error reading an image", error);
    }
  };

  return (
    <Screen>
      <AppButton title="Select Image" onPress={selectImage} />
      <Image source={{ uri: imageUri }} style={{ width: 200, height: 200 }} />
      <ImageInput imageUri={imageUri} />
    </Screen>
  );
}
