import Constants from 'expo-constants';

const settings = {
    dev: {
        apiUrl: 'https://www.igniteopsfireworks.com/api',
    },
    staging: {
        apiUrl: 'http://192.168.1.143:9000/api',
    },
    prod: {
        apiUrl: 'https://www.igniteopsfireworks.com/api',
    },
}

const getCurrentSettings = () => {
    if (__DEV__) return settings.dev;
    if (Constants.manifest.releaseChannel === 'staging') return settings.staging;
    return settings.prod;
}

export default getCurrentSettings();