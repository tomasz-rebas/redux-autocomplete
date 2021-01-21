import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import shouldBeSuggested from '../functions/shouldBeSuggested';
import { updateUserInput } from '../actions/userInput';
import { hideDropdown } from '../actions/dropdownVisibility';

export default function AutocompleteList() {

    const node = useRef();
    const dispatch = useDispatch();

    const usernames = useSelector(state => state.usernames);
    const userInput = useSelector(state => state.userInput);
    const dropdownVisibility = useSelector(state => state.dropdownVisibility);

    const handleClick = e => {
        dispatch(updateUserInput(e.target.innerText));
        dispatch(hideDropdown());
    }

    const handleOutsideClick = e => {
        if (!node.current.contains(e.target)) {
            dispatch(hideDropdown());
        }
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

    useEffect(() => {
        document.addEventListener("mousedown", handleOutsideClick);
        return () => {
            document.removeEventListener("mousedown", handleOutsideClick);
        };
    }, []);

    return (
        <div className="autocomplete-list" ref={node}>
            {dropdown}
        </div>
    );
}