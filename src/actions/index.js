export const setAnimals = (animals) => ({
    type: 'SET_ANIMALS',
    animals
});

export const isLoading = (bool) => ({
    type: 'IS_LOADING',
    bool
});

export const gotError = (message) => ({
    type: 'GOT_ERROR',
    message
});