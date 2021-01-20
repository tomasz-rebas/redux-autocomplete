import '../style.css';
import React from 'react';
import InputField from './InputField';
import getUsernames from '../functions/getUsernames';
import { updateUsernames } from '../actions/usernames';
import { useDispatch } from 'react-redux';

export default function App() {

    const dispatch = useDispatch();
    
    async function fetchData() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            const data = await response.json();
            const usernames = getUsernames(data);
            console.log(usernames);
            dispatch(updateUsernames(usernames));
        } catch (e) {
            console.error('The error occured. ' + e);
        }
    }

    fetchData();

    return (
        <div>
            <h1>Autocomplete</h1>
            <p>Start typing:</p>
            <InputField/>
            <button>Submit</button>
        </div>
    );
}