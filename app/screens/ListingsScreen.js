import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Screen from '../components/Screen';
import Card from '../components/Card';
import AppText from '../components/AppText';
import AppButton from '../components/AppButton';
import ActivityIndicator from '../components/ActivityIndicator';

import listingsApi from '../api/listings';
import useLocation from '../hooks/useLocation';
import useApi from "../hooks/useApi";

import routes from '../navigation/routes';

import colors from '../config/colors';

function ListingsScreen(props) {
    return (
      <Screen style={styles.screen}>
        <FlatList
          data={listings}
          keyExtractor={(listing) => listing.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.title}
              subTitle={"$" + item.price}
              image={item.image}
            />
          )}
        />
      </Screen>
    );
}

const styles = StyleSheet.create({
   screen: {
       padding: 20,
       backgroundColor: colors.light
   } 
});

export default ListingsScreen;