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

export const setDonations = (donations) => ({
    type: 'SET_DONATIONS',
    donations
});

export const addDonation = (name, donation) => ({
    type: 'ADD_DONATION',
    name,
    donation
});