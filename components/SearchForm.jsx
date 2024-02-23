"use client"
import { useState } from 'react';

const SearchForm = ({ onSubmit }) => {
    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(username);
    };

    return (
        <form onSubmit={handleSubmit} className="mt-4 mb-8 flex justify-center">
            <input
                type="text"
                value={username}
                onChange={handleChange}
                placeholder="Enter a GitHub username"
                className="border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 ml-2 rounded-md">
                Search
            </button>
        </form>
    );
};

export default SearchForm;
