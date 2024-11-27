// Tipos de ação
export const DEPOSITAR = 'DEPOSITAR';
export const LEVANTAR = 'LEVANTAR';

// Criadores de ação
export const depositar = (amount) => ({
    type: DEPOSITAR,
    amount,
});

export const levantar = (amount) => ({
    type: LEVANTAR,
    amount,
});
