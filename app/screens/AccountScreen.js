import React from 'react';

import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

function AccountScreen(props) {
    return (
        <Screen>
            <ListItem
                title="Mosh Hamedani"
                subTitle="programmingwithmosh@gmail.com"
                image={require('../assets/mosh.jpg')} />
        </Screen>
    );
}

export default AccountScreen;