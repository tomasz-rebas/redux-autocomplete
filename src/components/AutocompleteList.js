import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shouldBeSuggested from '../functions/shouldBeSuggested';
import { updateUserInput } from '../actions/userInput';

export default function AutocompleteList() {

    const usernames = useSelector(state => state.usernames);
    const userInput = useSelector(state => state.userInput);

    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(updateUserInput(event.target.innerHTML));
    }

    const dropdown = userInput === '' ? '' : usernames.filter(username => 
        shouldBeSuggested(username, userInput)
    ).map(username => 
        <div 
            className="autocomplete-list-item"
            key={username}
            onClick={handleClick}
        >
            {username}
        </div>
    );

    return (
        <div className="autocomplete-list">
            {dropdown}
        </div>
    );
}