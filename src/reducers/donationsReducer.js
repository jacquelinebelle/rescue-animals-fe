export const donations = (state = [], action) => {
    switch (action.type) {
        case 'SET_DONATIONS':
            return action.donations;
        case 'ADD_DONATION':
            return [...state, { id: Date.now(), name: action.name, donation: action.donation }];
        default:
            return state;
    }
}