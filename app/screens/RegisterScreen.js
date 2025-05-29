import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

import Screen from '../components/Screen';
import {
  FormField,
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
import AppText from '../components/AppText';

const validationSchema = Yup.object().shape({
    username: Yup.string().required().label('Username'),
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function RegisterScreen() {
    const registerApi = useApi(usersApi.register);
    const loginApi = useApi(authApi.login);
    const auth = useAuth();
    const [error, setError] = useState();

    const handleSubmit = async (userInfo) => {
        setError(null);
        const result = await registerApi.request(userInfo);
        console.log("result", result);
        if (!result.ok) {
            if (result.data) {
                setError(result.data.error);
                console.log("result", result);
                console.log("result.data.error", result.data.error);
            }
            else {
                setError("An unexpected error ocurred.");
                console.log(result);
            }
            return;
        }

        const loginResult = await loginApi.request(userInfo.username, userInfo.password);
        console.log("loginResult", loginResult);
        if (!loginResult.ok || !loginResult.data.access) {
            setError("Login failed after registration.");
            return;
        }
        auth.logIn(loginResult.data.access);
    };

    return (
        <React.Fragment>
            <ActivityIndicator visible={registerApi.loading || loginApi.loading} />
            {error && <AppText style={styles.errorText}>{error}</AppText>}
            <Screen style={styles.container}>
                <Formik
                    initialValues={{ username: "", email: "", password: "" }}
                    onSubmit={handleSubmit}
                    validationSchema={validationSchema} 
                >
                    {({ handleChange, handleSubmit, values }) => (
                        <React.Fragment>
                            <FormField
                                autoCorrect={false}
                                icon="account"
                                name="username"
                                placeholder="Username"
                                value={values.username}
                                onChangeText={handleChange("username")}
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
        </React.Fragment>
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
    },
    errorText: {
        color: "red",
        marginBottom: 10,
    },
});

export default RegisterScreen;