import React, { useState, useEffect } from 'react';
import '../pageone.css'; // Import the CSS file

const PageOne = () => {
    const [imageUrl, setImageUrl] = useState('');
    
    const fetchDadJokeImage = async () => {
        try {
            const jokeResponse = await fetch('https://icanhazdadjoke.com/', {
                headers: { 'Accept': 'application/json' }
            });
            const jokeData = await jokeResponse.json();
            const jokeId = jokeData.id;

            const imageUrl = `https://icanhazdadjoke.com/j/${jokeId}.png`;
            const imageResponse = await fetch(imageUrl, {
                headers: { 'Accept': 'image/png' }
            });

            if (imageResponse.ok) {
                setImageUrl(imageResponse.url);
            } else {
                console.error('Failed to fetch dad joke image.');
            }
        } catch (error) {
            console.error('Error:', error);
        }
    };

    useEffect(() => {
        fetchDadJokeImage();
    }, []);

    return (
        <div className="joke-container">
            {imageUrl ? (
                <div className="joke-box">
                    <img src={imageUrl} alt="Dad Joke" className="joke-image" />
                    <button className="refresh-button" onClick={fetchDadJokeImage}>Get a New Joke</button>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default PageOne;


