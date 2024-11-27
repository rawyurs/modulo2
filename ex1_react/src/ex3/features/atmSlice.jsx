import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    saldo: 0,
};

const atmSlice = createSlice({
    name: 'atm',
    initialState,
    reducers: {
        depositar: (state, action) => {
            state.saldo += action.payload; // Atualiza o saldo
        },
        levantar: (state, action) => {
            if (state.saldo >= action.payload) {
                state.saldo -= action.payload; // Subtrai do saldo se houver fundos
            } else {
                alert('Saldo insuficiente!');
            }
        },
    },
});

// Exportar as ações
export const { depositar, levantar } = atmSlice.actions;

// Exportar o reducer
export default atmSlice.reducer;
