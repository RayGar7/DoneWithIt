import React from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import {
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import * as Yup from 'yup';
import { Formik } from 'formik';
// use Formik instead of AppForm

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function RegisterScreen(props) {
    return (
        <Screen style={styles.container}>
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={(values) => console.log(values)}
                validationSchema={validationSchema} 
            >
                {() => <> 
                    <FormField
                        autoCorrect={false}
                        icon="account"
                        name="name"
                        placeholder="Name"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="email"
                        keyboardType="email-address"
                        name="email"
                        placeholder="Email"
                        textContentType="emailAddress"
                    />
                    <FormField
                        autoCapitalize="none"
                        autoCorrect={false}
                        icon="lock"
                        name="password"
                        placeholder="Password"
                        secureTextEntry
                        textContentType="password"
                    />
                    <SubmitButton title="Register" />
                </>}
            </Formik>
        </Screen>
    );
}

const styles = StyleSheet.create({
    container: {
      padding: 10,
    },
    logo: {
        width: 80,
        height: 80,
        alignSelf: 'center',
        marginTop: 50,
        marginBottom: 20,
    }
});

export default RegisterScreen;