import apiClient from './client';

const endpoint = '/listings';


const getListings = async () => {
    try {
        const response = await apiClient.get(endpoint);
        // uncomment for debugging
        // console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching listings:", error);
        return null; // Handle the error gracefully
    }
};

export const addListing = (listing) => {
    try {
        const data = new FormData();
        data.append("categoryId", listing.category.value);
        data.append("id", listing.id);
        data.append("location", JSON.stringify(listing.location)); // Convert location object to string
        data.append("price", listing.price);
        data.append("title", listing.title);
        data.append("description", listing.description);
        data.append("userId", listing.userId);

        listing.images.forEach((image, index) => {
            data.append('images', {
                name: 'image' + index,
                type: 'image/jpeg',
                uri: image,
            });
        });

        if (listing.location) {
            data.append("location", JSON.stringify(listing.location)); // Convert location object to string
        }

        return apiClient.post(endpoint, data);

    } catch (error) {
        console.error("Error posting listing:", error);
        return null; // Handle the error gracefully
    }
};

export default {
    getListings,
    addListing,
}