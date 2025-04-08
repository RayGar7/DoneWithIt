import React from 'react';
import { StyleSheet, View, Modal } from 'react-native';
import * as Progress from 'react-native-progress';
import LottieView from 'lottie-react-native';

import Text from '../components/AppText';

import colors from '../config/colors';

function UploadScreen({ onDone, progress = 0, visible = false }) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                { 
                    progress < 1 ? 
                    <Progress.bar 
                        color={colors.primary} 
                        progress={progress} 
                        width={200} /> : 
                    <LottieView 
                        autoPlay
                        loop={false}
                        onAnimationFinish={onDone}
                        source={require('../assets/animations/done.json')} 
                        style={styles.animation} />
                }
                
            </View>
        </Modal>
    );
}

const styles = StyleSheet.create({
    animation: {
        width: 150,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f8f4f4',
    },
    text: {
        fontSize: 20,
        color: '#333',
    },
})

export default UploadScreen;