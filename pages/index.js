"use client"

import { useState } from 'react';
import SearchForm from '../components/SearchForm';

const Home = () => {
    const [userData, setUserData] = useState(null);

    const handleSearch = async (username) => {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();
        setUserData(data);
    };

    return (
        <div className="container mx-auto">
            <h1 className="text-3xl font-semibold text-center mt-8 mb-4">GitHub User Search</h1>
            <SearchForm onSubmit={handleSearch} />
            {userData && (
                <div className="flex justify-center mt-4">
                    <div className="bg-gray-100 rounded-md p-4 mt-4" style={{ maxWidth: '500px' }}>
                        <h2 className="text-xl font-semibold">{userData.login}</h2>
                        <img src={userData.avatar_url} alt={userData.login} className="w-20 h-20 mx-auto mt-4 rounded-full" />
                        <p className="text-center mt-4">
                            Followers: {userData.followers} | Following: {userData.following}
                        </p>
                        <p className="text-center mt-2">Public Repos: {userData.public_repos}</p>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Home;
