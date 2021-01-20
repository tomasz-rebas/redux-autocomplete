import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shouldBeSuggested from '../functions/shouldBeSuggested';
import { updateUserInput } from '../actions/userInput';
import { hideDropdown } from '../actions/dropdownVisibility';

export default function AutocompleteList() {

    const usernames = useSelector(state => state.usernames);
    const userInput = useSelector(state => state.userInput);
    const dropdownVisibility = useSelector(state => state.dropdownVisibility);

    const dispatch = useDispatch();

    const handleClick = (event) => {
        dispatch(updateUserInput(event.target.innerText));
        dispatch(hideDropdown());
    }

    const dropdown = dropdownVisibility ? usernames.filter(username => 
        shouldBeSuggested(username, userInput)
    ).map(username => 
        <div 
            className="autocomplete-list-item"
            key={username}
            onClick={handleClick}
        >
            <strong>{username.substring(0, userInput.length)}</strong>
            {username.substring(userInput.length)}
        </div>
    ) : '';

    return (
        <div className="autocomplete-list">
            {dropdown}
        </div>
    );
}