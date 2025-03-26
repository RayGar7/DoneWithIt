import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// in future projects use this import instead of the above
// import { TabView, SceneMap, TabBar } from "react-native-tab-view";

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
            options={({ navigation }) => ({
                tabBarButton: () => (
                    <NewListingButton
                        onPress={() => navigation.navigate(routes.LISTING__EDIT)} 
                    />
                ),
                tabBarIcon: ({ color, size }) => (
                    <MaterialCommunityIcons
                        name="plus-circle"
                        color={color}
                        size={size}
                    />
                ),
            })}
        />
        <Tab.Screen 
            name="Account" 
            component={AccountNavigator}
            options={{
                tabBarIcon: ({ size, color }) => 
                    <MaterialCommunityIcons name="account" size={size} color={color} />
            }} />
    </Tab.Navigator>    
);

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "white",
  },
  indicator: {
    backgroundColor: "dodgerblue",
  },
  label: {
    color: "black",
    fontWeight: "bold",
  },
});

export default AppNavigator;