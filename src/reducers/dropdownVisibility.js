const dropdownVisibilityReducer = (state = false, action) => {

    switch (action.type) {
        case 'HIDE_DROPDOWN':
            return false;
        case 'SHOW_DROPDOWN':
            return true;
        default:
            return state;
    }
}

export default dropdownVisibilityReducer;