const usernamesReducer = (state = [], action) => {

    switch (action.type) {
        case 'UPDATE_USERNAMES':
            return state; // TODO
        default:
            return state;
    }
}

export default usernamesReducer;