import apiClient from './client';

const endpoint = '/listings';


const getListings = async () => {
    try {
        const response = await apiClient.get(endpoint);
        // uncomment for debugging
        //console.log("response", response);
        //console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching listings:", error);
        return null; // Handle the error gracefully
    }
};

// the following is a named export
export const addListing = (listing, onUploadProgress) => {
    console.log("listing", listing);
    try {
        const data = new FormData();
        data.append("price", listing.price);
        data.append("title", listing.title);
        data.append("categoryId", listing.category.value); 
        data.append("description", listing.description);

        //console.log("formData", formData);

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

        return apiClient.post(endpoint, formData, {
            onUploadProgress: (progress) =>
                onUploadProgress(progress.loaded / progress.total)
        });

    } catch (error) {
        console.error("Error posting listing:", error);
        return null; // Handle the error gracefully
    }
};

// the folowin is a default export
export default {
    getListings,
    addListing,
}