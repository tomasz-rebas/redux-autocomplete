import React from 'react';
import { useSelector } from 'react-redux';
import shouldBeSuggested from '../functions/shouldBeSuggested';

export default function AutocompleteList() {

    const usernames = useSelector(state => state.usernames);
    const userInput = useSelector(state => state.userInput);

    const dropdown = usernames.filter(username => 
        shouldBeSuggested(username, userInput)
    ).map(username => 
        <div className="autocomplete-list-item" key={username}>
            {username}
        </div>
    );

    return (
        <div className="autocomplete-list">
            {/* <div className="autocomplete-list-item">Richard</div>
            <div className="autocomplete-list-item">John</div>
            <div className="autocomplete-list-item">William</div> */}
            {dropdown}
        </div>
    );
}