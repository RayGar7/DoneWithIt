import apiClient from './client';

const endpoint = '/listings';


const getListings = async () => {
    try {
        const response = await apiClient.get(endpoint);
        // uncomment for debugging
        //console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching listings:", error);
        return null; // Handle the error gracefully
    }
};

export default {
    getListings,
}