import React from 'react';
import { View, StyleSheet } from 'react-native';


import LottieView from 'lottie-react-native';

import colors from '../config/colors';

function ActivityIndicator({ visible = false}) {
    if (!visible) return null;

    return (
        <LottieView 
            autoPlay
            loop
            source={require('../assets/animations/loader.json')}
            style={styles.overlay}>
            
        </LottieView>
    );
}

const styles = StyleSheet.create({
    overlay: {
        position: 'absolute',
        backgroundColor: colors.white,
        height: '100%',
        opacity: 0.8,
        width: '100%',
        zIndex: 1
    }
})

export default ActivityIndicator;