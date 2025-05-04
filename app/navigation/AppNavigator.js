import React, { useState } from 'react';
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import AccountScreen from "../screens/AccountScreen";
import ListingsScreen from "../screens/ListingsScreen";
import ListingEditScreen from "../screens/ListingEditScreen";
import FeedNavigator from './FeedNavigator';
import AccountNavigator from './AccountNavigator';
import NewListingButton from './NewListingButton';
import { TabView, SceneMap, TabBar } from 'react-native-tab-view';
import { StyleSheet } from 'react-native';

import colors from '../config/colors';

const ListingsRoute = () => <ListingsScreen />;
const ListingEditRoute = () => <ListingEditScreen />;
const AccountRoute = () => <AccountScreen />;

const AppNavigator = () => {
    const [index, setIndex] = useState(0);
    const [routes] = useState([
        { key: 'listings', title: 'Listings' },
        { key: 'listingEdit', title: 'Edit Listing' },
        { key: 'account', title: 'Account' },
    ]);

    const renderScene = SceneMap({
        listings: ListingsRoute,
        listingEdit: ListingEditRoute,
        account: AccountRoute,
    });

    return (
        <TabView
            navigationState={{ index, routes }}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{ width: 360 }}
            renderTabBar={(props) => (
              <TabBar
                {...props}
                style={styles.tabBar}
                indicatorStyle={styles.indicator}
                labelStyle={styles.label}
              />
            )}
            style={styles.container}
        />
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    tabBar: {
      backgroundColor: colors.primary,
      position: 'absolute', // Ensures the tab bar stays at the bottom
      bottom: 0,
      left: 0,
      right: 0,
    },
    indicator: {
      backgroundColor: 'blue', // Customize the indicator color
    },
    label: {
      color: 'black', // Customize the label color
    },
});

export default AppNavigator;