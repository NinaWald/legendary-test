import React, { useState, useEffect } from 'react';

const PageOne = () => {
    const [imageUrl, setImageUrl] = useState('');

    useEffect(() => {
        const fetchDadJokeImage = async (jokeId) => {
            const url = `https://icanhazdadjoke.com/j/${jokeId}.png`;
            try {
                const response = await fetch(url, {
                    headers: { 'Accept': 'image/png' }
                });
                if (response.ok) {
                    setImageUrl(response.url);
                } else {
                    console.error('Failed to fetch dad joke image.');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchDadJokeImage('R7UfaahVfFd'); // Replace with your jokeId
    }, []);

    return (
        <div>
            {imageUrl ? (
                <img src={imageUrl} alt="Dad Joke" />
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PageOne;
