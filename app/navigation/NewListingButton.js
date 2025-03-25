import React from 'react';
import { View, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

function NewListingButton({ onPress }) {
    return (
        <TouchableOpacity onPress={onPress}>
            <View style={styles.container}>
                    <MaterialCommunityIcons name="plus-circle" size={40} color="white" />
            </View>
        </TouchableOpacity>            
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: "dodgerblue",
        borderColor: "white",
        borderRadius: 40,
        borderWidth: 10,
        bottom: 20,
        height: 80,
        justifyContent: "center",
        width: 80,
    }
})

export default NewListingButton;