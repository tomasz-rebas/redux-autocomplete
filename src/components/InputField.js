import React from 'react';
import AutocompleteList from './AutocompleteList';
import { updateUserInput } from '../actions/userInput';
import { useDispatch } from 'react-redux';

export default function InputField() {

    const dispatch = useDispatch();

    const handleChange = (event) => {
        dispatch(updateUserInput(event.target.value));
    }

    return (
        <div className="autocomplete">
            <input 
                type="text" 
                placeholder="Name"
                onChange={handleChange}
            />
            <AutocompleteList/>
        </div>
    );
}