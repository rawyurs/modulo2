// services/catApi.js
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const API_KEY = 'live_cSJ9mBVVNPXvwpsmVFldFr4H509ZBVFbb6iLRSBnFPlBhW9IdRVmrg8cfLMBAuRO';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const catApi = createApi({
    reducerPath: 'catApi',
    baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
    endpoints: (builder) => ({
        getCatImages: builder.query({
            query: ({ page = 1, limit = 5, order = 'asc' }) => ({
                url: '', // URL está configurado no baseUrl
                params: {
                    limit,
                    page,
                    order,
                    api_key: API_KEY,
                },
            }),
        }),
    }),
});

export const { useGetCatImagesQuery } = catApi;
