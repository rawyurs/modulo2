export const FETCH_IMAGES_REQUEST = 'FETCH_IMAGES_REQUEST';
export const FETCH_IMAGES_SUCCESS = 'FETCH_IMAGES_SUCCESS';
export const FETCH_IMAGES_FAILURE = 'FETCH_IMAGES_FAILURE';

const API_KEY = 'live_cSJ9mBVVNPXvwpsmVFldFr4H509ZBVFbb6iLRSBnFPlBhW9IdRVmrg8cfLMBAuRO';
const BASE_URL = 'https://api.thecatapi.com/v1/images/search';

export const fetchImages = (page = 1, limit = 5, order = 'asc') => {
    return async (dispatch) => {
        dispatch({ type: FETCH_IMAGES_REQUEST });
        try {
            const response = await fetch(`${BASE_URL}?limit=${limit}&page=${page}&order=${order}&api_key=${API_KEY}`);
            if (!response.ok) {
                throw new Error('Falha na requisição');
            }
            const data = await response.json();

            // Ajustar o total de páginas se necessário
            const totalPages = 100; // Defina o total de páginas fixo ou calcule com base na API

            dispatch({ type: FETCH_IMAGES_SUCCESS, payload: data, page, totalPages });
        } catch (error) {
            dispatch({ type: FETCH_IMAGES_FAILURE, payload: error.message });
        }
    };
};
