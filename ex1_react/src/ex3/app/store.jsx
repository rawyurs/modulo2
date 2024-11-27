import { configureStore } from '@reduxjs/toolkit';
import atmReducer from '../features/atmSlice';

export const store = configureStore({
    reducer: {
        atm: atmReducer, // Conecta o slice ATM ao store global
    },
});
