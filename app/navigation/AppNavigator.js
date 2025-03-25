import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import AccountNavigator from "./AccountNavigator";
import NewListingButton from "./NewListingButton";


const Tab = createBottomTabNavigator();

import routes from '../navigation/routes';


const AppNavigator = () => (
    <Tab.Navigator>
        <Tab.Screen 
            name="Feed" 
            component={FeedNavigator}
            options={{
                tabBarIcon: ({ size, color }) => 
                    <MaterialCommunityIcons name="home" size={size} color={color} />
            }} />
        <Tab.Screen 
            name="ListingEdit" 
            component={ListingEditScreen}
            options={ ({ navigation }) => ({
                tabBarButton: () => <NewListingButton onPress={() => navigation.navigate(routes.LISTING__EDIT) }/>,
                tabBarIcon: ({ size, color }) => 
                    <MaterialCommunityIcons name="plus-circle" size={size} color={color} />
            })} />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ size, color }) => 
                    <MaterialCommunityIcons name="account" size={size} color={color} />
            }} />
    </Tab.Navigator>
);

export default AppNavigator;