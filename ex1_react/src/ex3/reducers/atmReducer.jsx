// Estado inicial
const initialState = {
    saldo: 0,
};

// Tipos de ação
const DEPOSITAR = 'DEPOSITAR';
const LEVANTAR = 'LEVANTAR';

// Reducer
const atmReducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSITAR:
            return { ...state, saldo: state.saldo + action.amount };
        case LEVANTAR:
            return { ...state, saldo: state.saldo - action.amount };
        default:
            return state;
    }
};

export default atmReducer;
