import React from 'react';
import { View, StyleSheet } from 'react-native';
import AppText from '../components/AppText';

function UploadScreen({ progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                <AppText>{progress * 100}%</AppText>
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        backgroundColor: '#f8f4f4',
        flex: 1,
        justifyContent: 'center',
    },
});

export default UploadScreen;