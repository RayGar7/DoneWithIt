import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';

import Screen from '../components/Screen';
import Card from '../components/Card';
import Text from '../components/AppText';
import AppButton from '../components/Button';
import ActivityIndicator from '../components/ActivityIndicator';
import listingsApi from '../api/listings';
import useLocation from '../hooks/useLocation';
import useApi from "../hooks/useApi";

import routes from '../navigation/routes';

import colors from '../config/colors';

function ListingsScreen({ navigation }) {
    const getListingsApi = useApi(listingsApi.getListings);
    console.log("ListingsScreen.js getListingsApi:", getListingsApi);

    useEffect(() => {
        const fetchListings = async () => {
            await getListingsApi.request(); // Await the request to ensure it completes
        };
        fetchListings();
    }, []);

    return (
        <Screen style={styles.screen}>
            {getListingsApi.error && <>
                <Text>Couldn't retrieve the listings.</Text>
                <AppButton title="Retry" onPress={loadListings} />
            </>}
            <ActivityIndicator visible={getListingsApi.loading} />
            <FlatList 
                data={getListingsApi.data}
                keyExtractor={listing => listing.id.toString()}
                renderItem={({ item }) => (
                    <Card 
                        title={item.title}
                        subTitle={"$" + item.price}
                        imageUrl={item.images[0].url}
                        onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
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