import * as Yup from "yup";

export const listingSchema = Yup.object().shape({
    categoryId: Yup.number().required(),
    id: Yup.number().required(),
    images: Yup.array().of(
        Yup.object().shape({
            url: Yup.string().url().required(),
            thumbnailUrl: Yup.string().url().required(),
        })
    ),
    location: Yup.object().shape({
        latitude: Yup.number().required(),
        longitude: Yup.number().required(),
    }),
    price: Yup.number().required(),
    title: Yup.string().required(),
    userId: Yup.number().required(),
});