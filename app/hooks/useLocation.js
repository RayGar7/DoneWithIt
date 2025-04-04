import * as Location from 'expo-location';
import { useEffect, useState } from 'react';

const useLocation = () => {
    const [location, setLocation] = useState();

    const getLocation = async () => {
        try {
            const { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') return;
            const { coords: { latitude, longitude } } = await Location.getLastKnownPositionAsync();

            setLocation({ latitude, longitude });
        }
        catch (error) {
            console.log(error);
        }
    };
    
    useEffect(() => {
        getLocation();
    }, []);

    return location;
};


export default useLocation;