import userInputReducer from './userInput';
import usernamesReducer from './usernames';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    userInput: userInputReducer,
    usernames: usernamesReducer
})

export default rootReducer;