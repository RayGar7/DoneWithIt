import * as SecureStore from 'expo-secure-store';

const key = "authToken";

const storeToken = async (authToken) => {
    try {
        await SecureStore.setItemAsync(key, authToken);
    } catch (error) {
        console.log("Error storing token", error);
    }
}

const getToken = async () => {
    try {
        const authToken = await SecureStore.getItemAsync(key);
        return authToken;
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
}

const getUser = async () => {
    const token = await getToken();
    try {
        const token = await getToken();
        return token ? jwtDecode(token) : null;
    } catch (error) {
        console.log("Error getting the auth token", error);
    }
}

const removeToken = async () => {
    try {
        await SecureStore.deleteItemAsync(key);
    } catch (error) {
        console.log("Error removing the auth token", error);
    }
}

export default { getToken, getUser, removeToken, storeToken };