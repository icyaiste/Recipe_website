import React from 'react'
import './styles.css';
import { useState } from 'react';

const Search = (props) => {
    const { getDataFromSearch } = props;

    const [inputValue, setInputValue] = useState('');

    const handleInputValue = (event) => {
        const { value } = event.target;
        //set the updated state
        setInputValue(value);
    }
    //console.log(inputValue);


    const handleSubmit = (event) => {
        event.preventDefault()
        getDataFromSearch(inputValue)
    }

    return (
        <form onSubmit={handleSubmit} className='Search'>
            <input name='search' onChange={handleInputValue} value={inputValue} placeholder='Search recipes' id='search' />
            <button type='submit'>Search</button>
        </form>
    )
}

export default Search
