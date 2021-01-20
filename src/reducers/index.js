import userInputReducer from './userInput';
import usernamesReducer from './usernames';
import dropdownVisibilityReducer from './dropdownVisibility';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userInput: userInputReducer,
    usernames: usernamesReducer,
    dropdownVisibility: dropdownVisibilityReducer
})

export default rootReducer;