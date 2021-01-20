const usernamesReducer = (state = [], action) => {

    switch (action.type) {
        case 'UPDATE_USERNAMES':
            return action.payload;
        default:
            return state;
    }
}

export default usernamesReducer;