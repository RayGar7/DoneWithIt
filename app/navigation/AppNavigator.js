import React, { useState } from "react";
import { View, StyleSheet, Text, Dimensions } from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
// in future projects use this import will be used for tabs
import { TabView, SceneMap, TabBar } from "react-native-tab-view";
// this next import is the one we're replacing from now on
// import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AccountNavigator from "./AccountNavigator";
import FeedNavigator from "./FeedNavigator";
import ListingEditScreen from "../screens/ListingEditScreen";
import NewListingButton from "./NewListingButton";
import routes from "./routes";


const initialLayout = { width: Dimensions.get("window").width };


const AppNavigator = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
      { key: "feed", title: "Feed" },
      { key: "listingEdit", title: "New Listing" },
      { key: "account", title: "Account" },
    ]);
  
    const renderScene = SceneMap({
      feed: FeedNavigator,
      listingEdit: ListingEditScreen,
      account: AccountNavigator,
    });

    return (
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: initialLayout.width }}
        tabBarPosition="bottom"
      />
    ); 
}

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