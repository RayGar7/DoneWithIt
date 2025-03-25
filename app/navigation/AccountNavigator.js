import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedNavigator} />
        <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
        <Stack.Screen name="Account" component={AccountNavigator} />
    </Stack.Navigator>
);

export default AccountNavigator;