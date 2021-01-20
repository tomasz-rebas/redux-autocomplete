import React from 'react';
import AutocompleteList from './AutocompleteList';
import { updateUserInput } from '../actions/userInput';
import { useDispatch, useSelector } from 'react-redux';

export default function InputField() {

    const dispatch = useDispatch();

    const userInput = useSelector(state => state.userInput);

    const handleChange = (event) => {
        dispatch(updateUserInput(event.target.value));
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