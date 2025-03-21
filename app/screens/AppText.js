import React from 'react';
import { StyleSheet, Text } from 'react-native';

function AppText(props) {
    return (
        <Text style={styles.text}>{children}</Text>
    );
}

const styles = StyleSheet.create({
    text: {
        color: 'tomato',

        ...Platform.select({
            ios: {
                fontSize: 20,
                fontFamily: 'Avenir',
            },
            android: {
                fontSize: 18,
                fontFamily: 'Roboto',
            },
        })
    },
});

export default AppText;