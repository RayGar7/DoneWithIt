import React, { useState } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import * as Yup from 'yup';
import authApi from '../api/auth';


const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function LoginScreen(props) {
    const auth = useAuth();
    const [loginFailed, setLoginFailed] = useState(false);



    const handleSubmit = async ({ username, password}) => {
        const result = await authApi.login(username, password);
        if (!result.ok) return setLoginFailed(true);
        setLoginFailed(false);
        auth.logIn(result.data);
    };

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")} 
                style={styles.logo} />
            <ErrorMessage error={"Invalid username and/or password."} visible={loginFailed} />
            <Form
                initialValues={{ username: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >       
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
                    icon="lock"
                    name="password"
                    placeholder="Password"
                    secureTextEntry
                    textContentType="password"
                />        
                <SubmitButton title="Login" /> 
            </Form>
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

export default LoginScreen;