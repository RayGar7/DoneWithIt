import { useState } from 'react';

export default useApi = (apiFunc) => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(false);
    const [loading, setLoading] = useState(false);
    console.log("useApi.js apiFunc:", apiFunc);


    //we cannot pass an sync function to an effect hook so we define this function
    // can call it inside useEffect
    const request = async (...args) => {
        setLoading(true); // Show the loading indicator
        const response = await apiFunc();
        console.log("useApi.js response:", response);
        setLoading(false); // Hide the loading indicator
    
        if (!data) {
            console.log("API Response Error: No data received");
            setError(true); // Show the error message
            return;
        }
        setError(false);                                                     
        setData(response.data);
        //console.log("ListingsScreen.js listings:", listings);
        return response;
    }
}