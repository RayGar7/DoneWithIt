import React, { useRef } from 'react';
import { View, StyleSheet, ScrollView } from 'react-native';

import ImageInput from './ImageInput';

function ImageInputList({ imageUris = [], onRemoveImage, onAddImage }) {
    const scrollView = useRef();

    return (
        // the size of a view is determined by the size of its content
        // so we need to wrap the ScrollView in a View
        <View>
            <ScrollView ref={scrollView} horizontal onContentSizeChange={() => scrollView.current.scrollToEnd()}>
                <View style={styles.container}>
                    {imageUris.map((uri) => (
                        <View key={uri} style={styles.image}>
                            <ImageInput 
                                imageUri={uri} 
                                key={uri}
                                onChangeImage={() => onRemoveImage(uri)} 
                            /> 
                        </View>
                    ))}
                    <ImageInput onChangeImage={(uri) => onAddImage(uri)} />
                </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        marginBottom: 20,
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 15,
        marginRight: 10,
    },
})

export default ImageInputList;