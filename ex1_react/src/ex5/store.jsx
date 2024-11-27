// store.js
import { configureStore } from '@reduxjs/toolkit';
import { catApi } from './createApi';

const store = configureStore({
    reducer: {
        [catApi.reducerPath]: catApi.reducer,
    },
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware().concat(catApi.middleware),
});

export default store;
