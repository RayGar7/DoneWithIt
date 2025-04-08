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

function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const fetchListings = async () => {
            await getListingsApi.request(); // Await the request to ensure it completes
        };
        fetchListings();
    }, []);

    //we cannot pass an sync function to an effect hook so we define this function
    // can call it inside useEffect
    const loadListings = async () => {
        setLoading(true); // Show the loading indicator
        const data = await listingsApi.getListings();
        // uncomment for debugging
        //console.log("data", data);
        setLoading(false); // Hide the loading indicator
    
        if (!data) {
            console.log("API Response Error: No data received");
            setError(true); // Show the error message
            return;
        }
    
        setError(false); // Clear any previous errors
        setListings(data); // Update the listings state
    }

    return (
        <Screen style={styles.screen}>
            {error && <>
                <AppText>Couldn't retrieve the listings.</AppText>
                <AppButton title="Retry" onPress={loadListings} />
            </>}
            <ActivityIndicator visible={loading} />
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