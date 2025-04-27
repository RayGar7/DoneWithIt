import React, { useState, useContext } from 'react';
import { StyleSheet, Image } from 'react-native';

import Screen from '../components/Screen';
import { ErrorMessage, Form, FormField, SubmitButton } from "../components/forms";
import * as Yup from 'yup';
import authApi from '../api/auth';
import { jwtDecode } from 'jwt-decode';
import AuthContext from '../auth/context';

console.log("jwtDecode:", jwtDecode);

const validationSchema = Yup.object().shape({
    email: Yup.string().required().email().label('Email'),
    password: Yup.string().required().min(4).label('Password')
});


function LoginScreen(props) {
    const authContext = useContext(AuthContext);
    const [loginFailed, setLoginFailed] = useState(false);



    const handleSubmit = async ({ email, password}) => {
        //console.log("submit clicked", email, password);
        const result = await authApi.login(email, password);
        console.log("result.ok", result.ok);
        if (!result.ok) {
            console.log("!result.ok", result.ok);
            return setLoginFailed(true);
        }
        setLoginFailed(false);
        console.log(result.data);
        const user = jwtDecode(result.data);
        console.log(user);
        authContext.setUser(user);
    }

    return (
        <Screen style={styles.container}>
            <Image 
                source={require("../assets/logo-red.png")} 
                style={styles.logo} />
            <Form
                initialValues={{ email: '', password: '' }}
                onSubmit={handleSubmit}
                validationSchema={validationSchema}
            >       
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