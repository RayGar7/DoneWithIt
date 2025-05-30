import React from 'react';
import { View, StyleSheet, Image, TouchableWithoutFeedback, Alert } from 'react-native';
import { useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

import colors from '../config/colors';

function ImageInput({ imageUri, onChangeImage }) {
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
    //console.log("imageUri: ", imageUri);
    const handlePress = () => {
        if (!imageUri) selectImage();
        else {
            Alert.alert("Delete", "Are you sure you want to delete this image?", [
                { text: "Yes", onPress: () => onChangeImage(null) },
                { text: "No" }
            ]);
        }
    }
    
    const selectImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ['images'],
                quality: 1,
            });
            if (!result.canceled) onChangeImage(result.assets[0].uri);
            
        } catch (error) {
            console.log("Error reading an image", error);
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
        marginRight: 10,
        overflow: 'hidden',
        width: 100,
    }, 
    image: {
        height: '100%',
        width: '100%',
    },
});

export default ImageInput;