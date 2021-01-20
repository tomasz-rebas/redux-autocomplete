import React from 'react';
import InputField from './InputField';
import '../style.css';

export default function App() {
    return (
        <div>
            <h1>Autocomplete</h1>
            <p>Start typing:</p>
            <InputField/>
            <button>Submit</button>
        </div>
    );
}