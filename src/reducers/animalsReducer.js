export const animals = (state = [], action) => {
    switch (action.type) {
        case 'SET_ANIMALS':
            return action.animals;
        default:
            return state;
    }
}

export const loading = (state = false, action) => {
    switch( action.type) {
        case 'IS_LOADING':
            return action.bool;
        default:
            return state;
    }
}

export const error = (state = false, action) => {
    switch( action.type) {
        case 'GOT_ERROR':
            return action.message;
        default:
            return state;
    }
}