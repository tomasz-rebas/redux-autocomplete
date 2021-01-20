const userInputReducer = (state = '', action) => {

    switch (action.type) {
        case 'UPDATE_USER_INPUT':
            return action.payload;
        default:
            return state;
    }
}

export default userInputReducer;