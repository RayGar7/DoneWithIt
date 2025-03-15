import React from 'react';
import { MaterialCommunityIcons } from "@expo/vector-icons";

function MyAccountScreen(props) {
    return (
        <TouchableWithoutFeedback onPress={onPress}>
            <View styles={styles.container}>
                <MaterialCommunityIcons
                    name="format-list-bullet"
                    size={35}
                    color={colors.white}
                />
            </View>
        </TouchableWithoutFeedback>
    );
}

export default MyAccountScreen;