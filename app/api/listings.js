import client from './client';

const endpoint = '/listings';


const getListings = async () => {
    try {
        const response = await client.get(endpoint);
        // uncomment for debugging
        //console.log("response.data", response.data);
        return response.data;
    } catch (error) {
        console.error("Error fetching listings:", error);
        return null; // Handle the error gracefully
    }
};

// the following is a named export
export const addListing = (listing, onUploadProgress) => {
    //console.log("listing", listing);
    try {
        const formData = new FormData();
        formData.append("categoryId", null); // Assuming categoryId is not needed for now
        formData.append("price", listing.price);
        formData.append("title", listing.title);
        formData.append("description", listing.description);

        //console.log("formData", formData);

        listing.images.forEach((image, index) => {
            formData.append('images', {
                name: 'image' + index,
                type: 'image/jpeg',
                uri: image,
            });
        });

        if (listing.location) {
            formData.append("location", JSON.stringify(listing.location)); // Convert location object to string
        }

        return client.post(endpoint, formData, {
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