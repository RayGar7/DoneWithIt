import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountScreen from "../screens/AccountScreen";

const Stack = createStackNavigator();

const AccountNavigator = () => (
    <Stack.Navigator>
        <Stack.Screen name="Feed" component={FeedNavigator} />
        <Stack.Screen name="ListingEdit" component={ListingEditScreen} />
        <Stack.Screen name="Account" component={AccountNavigator} />
    </Stack.Navigator>
);

export default AccountNavigator;