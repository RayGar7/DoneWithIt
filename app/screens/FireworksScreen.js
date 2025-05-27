import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet } from 'react-native';

import ActivityIndicator from '../components/ActivityIndicator';
import AppButton from '../components/AppButton';
import AppText from '../components/AppText';
import Card from '../components/Card';
import Screen from '../components/Screen';
import colors from '../config/colors';
import fireworksApi from '../api/fireworks';
import routes from '../navigation/routes';
import useApi from '../hooks/useApi';



function FireworksScreen({ navigation }) {
  const getFireworksApi = useApi(fireworksApi.getFireworks);

  useEffect(() => {
    const fetchFireworks = async () => {
      await getFireworksApi.request();
      //console.log("Fireworks API Response:", response); // Log the full response
      console.log("Fireworks Data:", getFireworksApi.data[0]); // Log the fetched data
      console.log("API Error:", getFireworksApi.error); // Log any errors
    };
  
    fetchFireworks();
  }, []);

  return (
    <>
      <ActivityIndicator visible={getFireworksApi.loading} />
      <Screen style={styles.screen}>
        {getFireworksApi.error && (
          <> 
            <AppText>Couldn't retrieve the fireworks.</AppText>
            <AppButton title="Retry" onPress={getFireworksApi.request} />
          </>
        )}
        <FlatList
          data={getFireworksApi.data}
          keyExtractor={(firework) => firework.id.toString()}
          renderItem={({ item }) => (
            <Card
              title={item.name}
              subTitle={"$" + item.price}
              imageUrl={item.image}
              onPress={() => navigation.navigate("/")}
              //onPress={() => navigation.navigate(routes.LISTING_DETAILS, item)}
              thumbnailUrl={item.image}
            />
          )}
        />
      </Screen>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light
  } 
});

export default FireworksScreen;