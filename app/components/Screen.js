import React from 'react';
import Constants from "expo-constants";
import { View, StyleSheet, SafeAreaView } from 'react-native';

import colors from '../config/colors';

function Screen({ children, style }) {
    return (
        <SafeAreaView style={[styles.screen, style]}>{children}</SafeAreaView>
    );
}
const styles = StyleSheet.create({
    screen: {
        paddingTop: Constants.statusBarHeight,
        backgroundColor: colors.light,
        flex: 1
    }
})

export default Screen;