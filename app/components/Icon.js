import React from 'react';
import { View } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import colors from '../config/colors';

function Icon({
    name,
    size = 40,
    backgroundColor = colors.black,
    iconColor = "#fff"
}) {
    return (
        <View style={{
            width: size,
            height: size,
            borderRadius: size / 2,
            backgroundColor,        // JavaScript syntax: if the key and parameter are the same just use the parameter name
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <MaterialCommunityIcons name={name} color={iconColor} size={size * 0.5} />
        </View>
    );
}

export default Icon;