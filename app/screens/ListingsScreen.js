import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import Card from '../components/Card';

import listingsApi from '../api/listings';

import routes from '../navigation/routes';

import colors from '../config/colors';

function ListingsScreen({ navigation }) {
    const [listings, setListings] = useState([]);

    useEffect(() => {
        loadListings();
    }, []);

    //we cannot pass an sync function to an effect hook so we define this function
    // can call it inside useEffect
    const loadListings = async () => {
        const response = await listingsApi.getListings();
        setListings(response.data);
    }

    return (
        <Screen style={styles.screen}>
            <FlatList 
                data={listings}
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