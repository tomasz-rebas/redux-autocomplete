import React from 'react';
import AutocompleteList from './AutocompleteList';
import { updateUserInput } from '../actions/userInput';
import { hideDropdown, showDropdown } from '../actions/dropdownVisibility';
import { useDispatch, useSelector } from 'react-redux';

export default function InputField() {

    const dispatch = useDispatch();

    const userInput = useSelector(state => state.userInput);

    const handleChange = e => {
        const { value } = e.target;
        dispatch(updateUserInput(value));
        if (value === '') {
            dispatch(hideDropdown());
        } else {
            dispatch(showDropdown());
        }
    }

    return (
        <div className="autocomplete">
            <input 
                type="text" 
                placeholder="Name"
                onChange={handleChange}
                value={userInput}
            />
            <AutocompleteList/>
        </div>
    );
}