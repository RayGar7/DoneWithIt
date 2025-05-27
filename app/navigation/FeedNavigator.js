import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FireworksScreen from "../screens/FireworksScreen";
import ListingDetailsScreen from "../screens/ListingDetailsScreen";

const Stack = createStackNavigator();

const FeedNavigator = () => (
    <Stack.Navigator mode="modal" screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="Fireworks" 
            component={FireworksScreen} 
        />
        <Stack.Screen 
            name="ListingDetails" 
            component={ListingDetailsScreen} 
        />
    </Stack.Navigator>
);

export default FeedNavigator;