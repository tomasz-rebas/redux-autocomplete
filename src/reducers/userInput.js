export const userInputReducer = (state = '', action) => {

    switch (action.type) {
        case 'UPDATE_USER_INPUT':
            return state; // TODO
        default:
            return state;
    }
}