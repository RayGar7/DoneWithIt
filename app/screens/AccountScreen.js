import React from 'react';
import { StyleSheet, View, FlatList } from 'react-native';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';
import ListItemSeparator from '../components/ListItemSeparator';

import colors from '../config/colors';
import Icon from '../components/Icon';

const menuItems = [
    {
        title: "My Listings",
        icon: {
            name: "format-list-bulleted",
            backgroundColor: colors.primary
        }
    },
    {
        title: "My Messages",
        icon: {
            name: "email",
            backgroundColor: colors.secondary
        }
    }
]

function AccountScreen(props) {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <ListItem
                    title="Mosh Hamedani"
                    subTitle="programmingwithmosh@gmail.com"
                    image={require('../assets/mosh.jpg')} >

                </ListItem>
            </View>
            <View style={styles.container}>
                <FlatList 
                    data={menuItems}
                    keyExtractor={menuItem => menuItem.title}
                    ItemSeparatorComponent={ListItemSeparator }
                    renderItem={({ item }) => {
                        <ListItem
                            title={item.title}
                            ImageComponent={
                                <Icon
                                    name={item.icon.name}
                                    backgroundColor={item.icon.backgroundColor}
                                />
                            } 
                        />
                        }
                    }
                />
            </View>
            <ListItem
                title="Log Out"
                ImageComponent={
                    <Icon name="logout" backgroundColor="#ffe66d" />
                } >

            </ListItem>
        </Screen>
    );
}

const styles = StyleSheet.create({
    screen: {
        backgroundColor: colors.light
    },
    container: {
        marginVertical: 20
    }
})

export default AccountScreen;