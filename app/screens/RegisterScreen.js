import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import { AppForm } from '../components/forms';
import * as Yup from 'yup';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")} 
                style={styles.logo} />

            <AppForm
                initialValues={{ name: '', email: '', password: '' }}
                onSubmit={values => console.log(values)}
                validationSchema={validationSchema}
            >                
            </AppForm>
        </Screen>
    );
}

const styles = StyleSheet.create({
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
});

export default RegisterScreen;