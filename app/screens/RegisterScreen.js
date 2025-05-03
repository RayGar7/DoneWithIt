import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  AppFormField as FormField,
  SubmitButton,
} from "../components/forms";
import * as Yup from 'yup';
import { Formik } from 'formik';
// use Formik instead of AppForm
import useAuth from '../auth/useAuth';
import usersApi from '../api/users';
import useApi from '../hooks/useApi';
import authApi from '../api/auth';
import ActivityIndicator from '../components/ActivityIndicator';

const validationSchema = Yup.object().shape({
    name: Yup.string().required().label('Name'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        const result = await registerApi.request(userInfo);

        if (!result.ok) {
            if (result.data) setError(result.data.error);
            else {
                setError("An unexpected error ocurred.");
                console.log(result);
            }
            return;
        }

        const { data: authToken } = await loginApi.request(
            userInfo.email,
            userInfo.password
        );

        auth.logIn(authToken);
    };

    return (
        <Screen style={styles.container}>
            <ActivityIndicator visible={true} />
            <Formik
                initialValues={{ name: "", email: "", password: "" }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema} 
            >
                {({ handleChange, handleSubmit, values }) => (
                    <React.Fragment>
                        <FormField
                            autoCorrect={false}
                            icon="account"
                            name="name"
                            placeholder="Name"
                            value={values.name}
                            onChangeText={handleChange("name")}
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="email"
                            keyboardType="email-address"
                            name="email"
                            placeholder="Email"
                            textContentType="emailAddress"
                            value={values.email}
                            onChangeText={handleChange("email")}
                        />
                        <FormField
                            autoCapitalize="none"
                            autoCorrect={false}
                            icon="lock"
                            name="password"
                            placeholder="Password"
                            secureTextEntry
                            textContentType="password"
                            value={values.password}
                            onChangeText={handleChange("password")}
                        />
                        <SubmitButton title="Register" onPress={handleSubmit} />
                    </React.Fragment>
                )}
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