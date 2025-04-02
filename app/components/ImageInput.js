import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  TouchableWithoutFeedback,
  Alert,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";

import colors from "../config/colors";

function ImageInput({ imageUri, onChangeImage }) {
    //console.log("imageUri: ", imageUri);
    useEffect(() => {
        requestPermission();
    }, []);

    const requestPermission = async () => {
      const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert("You need to enable permission to access the library.");
      } else {
        console.log("Permission granted: ", status);
      }
    };

    const handlePress = () => {
        if (!imageUri) {
            selectImage();
        } else {
            Alert.alert('Delete', 'Are you sure you want to delete this image?', [
                { text: 'Yes', onPress: () => onChangeImage(null) },
                { text: 'No' },
            ]);
        }
    }

    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images', 'videos'],
                quality: 1,
            });
            console.log("result: ", result);
            console.log("result.assets[0].uri", result.assets[0].uri);

            // Check if the user selected an image
            if (!result.canceled && result.assets && result.assets.length > 0) {
              onChangeImage(result.assets[0].uri); // Access the first item's URI
            }
        } catch (error) {
            console.log('Error reading an image', error);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={handlePress}>
            <View style={styles.container}>
                {!imageUri && (
                    <MaterialCommunityIcons color={colors.medium} name="camera" /> )}
                {imageUri && ( 
                    <Image source={{ uri: imageUri }} style={styles.image} /> )}
            </View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: colors.light,
        borderRadius: 15,
        height: 100,
        justifyContent: 'center',
        overflow: 'hidden',
        width: 100,
    },
    image: {
        width: '100%',
        height: '100%',
    },
});

export default ImageInput;