import client from './client';

const endpoint = '/api/fireworks';

const getFireworks = () => {
    return client.get(endpoint);
};



// const addListing = (listing, onUploadProgress) => {
//     const data = {
//         title: listing.title,
//         price: listing.price,
//         categoryId: listing.category.value,
//         description: listing.description,
//         images: listing.images, // Send the array of image URIs directly
//         location: listing.location,
//     };

//     return client.post(endpoint, data, {
//         onUploadProgress: (progress) => 
//             onUploadProgress(progress.loaded / progress.total),
//     });
// }

export default {
    getFireworks,
};