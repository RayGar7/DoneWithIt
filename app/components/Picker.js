import React, { useState } from 'react';
import { 
    View, 
    StyleSheet, 
    Platform,
    Modal,
    Button,
    FlatList } from 'react-native';
import { GestureHandlerRootView, TouchableWithoutFeedback } from 'react-native-gesture-handler';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Text from './Text';
import defaultStyles from '../config/styles';
import PickerItem from './PickerItem';
import Screen from './Screen';

function AppPicker({
    icon,
    items,
    numberOfColumns = 1,
    onSelectItem,
    PickerItemComponent = PickerItem,
    placeholder,
    selectedItem,
    width = "100%",
}) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <React.Fragment>
            <GestureHandlerRootView>
                <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
                    <View style={[styles.container, { width }]}>
                        {
                            icon 
                            && 
                            <MaterialCommunityIcons 
                                name={icon} 
                                size={20} 
                                color={defaultStyles.colors.medium} 
                                style={styles.icon} 
                            />
                        }
                        {selectedItem ? (
                            <Text style={styles.text}>{selectedItem.label}</Text>
                        ) : (
                            <Text style={styles.placeholder}>{placeholder}</Text>
                        )}
                        <MaterialCommunityIcons 
                            name="chevron-down-circle" 
                            size={20} 
                            color={defaultStyles.colors.black} 
                            style={styles.chevronIcon} 
                        />
                    </View>
                </TouchableWithoutFeedback>
                <Modal visible={modalVisible} animationType="slide">
                    <Screen>
                        <Button title="Close" onPress={() => setModalVisible(false)} />
                        <FlatList 
                            data={items}
                            keyExtractor={item => item.value.toString()}
                            numColumns={numberOfColumns}
                            renderItem={({ item }) => (
                                <PickerItemComponent
                                    item={item}
                                    label={item.label}
                                    onPress={() => {
                                        setModalVisible(false);
                                        onSelectItem(item);
                                    }}
                                />
                            )} 
                        />
                    </Screen>                    
                </Modal>
            </GestureHandlerRootView>
        </React.Fragment>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: defaultStyles.colors.white,
        borderRadius: 25,
        flexDirection: "row",
        width: "100%",
        padding: 15,
        marginVertical: 10,
    },
    icon: {
        marginRight: 10,
        alignItems: "center", // Center content vertically
        justifyContent: "center", // Center content horizontally
    },
    placeholder: {
      color: defaultStyles.colors.medium,
      flex: 1,
    },
    textInput: {
        fontSize: 18,
        fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
        color: defaultStyles.colors.dark,
        width: "100%",
    },
    chevronIcon: {
        marginRight: 10,
        color: defaultStyles.colors.black,
        alignItems: "center", // Center content vertically
        justifyContent: "center", // Center content horizontally
    },
})

export default AppPicker;