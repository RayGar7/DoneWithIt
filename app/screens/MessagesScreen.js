import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Constants from "expo-constants";

import Screen from '../components/Screen';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteActions from '../components/lists/ListItemDeleteAction';
import ListItem from '../components/lists/ListItem';
import ListItemSeparator from '../components/lists/ListItemSeparator';
import ListItemDeleteActions from '../components/lists/ListItemDeleteActions';

const initialMessages = [
    {
      id: 1,
      title: "Mosh Hamedani",
      description: "Hey! Is this item still available?",
      image: require("../assets/mosh.jpg"),
    },
    {
      id: 2,
      title: "Mosh Hamedani",
      description:
        "I'm interested in this item. When will you be able to post it?",
      image: require("../assets/mosh.jpg"),
    },
]

function MessagesScreen(props) {
    const [messages, setMessages] = useState(initialMessages);
    const [refreshing, setRefreshing] = useState(false);

    const handleDelete = message => {
        // Delete the message from messages
        setMessages(messages.filter(m => m.id !== message.id));
        // Call the server to delete it
    }   

    return (
        <Screen>
            <FlatList
                data={messages}
                keyExtractor={message => message.id.toString()}
                renderItem={({ item }) => (
                    <ListItem
                        title={item.title}
                        subTitle={item.description}
                        image={item.image}
                        onPress={() => console.log('Message selected', item)}
                        renderRightActions={() => 
                            <ListItemDeleteActions onPress={() => handleDelete(item)} />
                        }
                    />
                )}
                ItemSeparatorComponent={ListItemSeparator}
                refreshing={refreshing}
                onRefresh={() => {
                    setMessages([
                        {
                            id: 3,
                            title: 'T3',
                            description: 'D3',
                            image: require('../assets/mosh.jpg')
                        }
                    ])
                }}
            />
        </Screen>
    );
}

const styles = StyleSheet.create({
})

export default MessagesScreen;