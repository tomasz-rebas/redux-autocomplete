import React from 'react';
import AutocompleteList from './AutocompleteList';

export default function InputField() {
    return (
        <div className="autocomplete">
            <input 
                type="text" 
                placeholder="Name"
            />
            <AutocompleteList/>
        </div>
    );
}