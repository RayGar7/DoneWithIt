import AsyncStorage from '@react-native-async-storage/async-storage';
import dayjs from 'dayjs';

const prefix = 'cache';


const store = async (key, value) => {
    //console.log("cache hit");
    try {
        const item = {
            value, 
            timestamp: Date.now()
        }
        await AsyncStorage.setItem(prefix + key, JSON.stringify(item));

        const now = dayjs();
    } catch (error) {
        console.error('Error storing data', error);
    }
}

const isExpired = (item) => {
    const now = dayjs(Date.now());
    const storedTime = dayjs(item.timestamp);
    return now.diff(storedTime, 'minutes') > 5;
}

const get = async (key) => {
    try {
        const value = await AsyncStorage.getItem(prefix + key);
        const item = JSON.parse(value);

        if (!item) return null;

        if (isExpired(item)) {
            // Command Query Separation (CQS)
            await AsyncStorage.removeItem(prefix + key);
            return null;
        }
        
        return item.value;
    } catch (error) {
        console.error('Error retrieving data', error);
    }

}

export default {
    store,
    get
}