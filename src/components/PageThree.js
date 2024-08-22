import React, { useState } from 'react';
import '../pagethree.css'

const PageThree = () => {
    const [imageUrl, setImageUrl] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
  
    const fetchRandomImage = () => {
      setLoading(true);
      setError(null);
      setImageUrl(''); // Clear the previous image before loading the new one
      
      const imageFetchPromise = fetch('https://picsum.photos/200/300')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.url;
      });
  
        const delayPromise = new Promise((resolve) => setTimeout(resolve, 2000));

        Promise.all([imageFetchPromise, delayPromise])
          .then(([url]) => {
            setImageUrl(url);
            setLoading(false);
          })
          .catch(() => {
            setError('Failed to load image');
            setLoading(false);
          });
      };
  
    return (
      <div className="container">  {/* Apply container class */}
        <button onClick={fetchRandomImage}>Fetch Random Image</button>
  
        {loading && <p>Loading...</p>}
        {error && <p>{error}</p>}
        
        {imageUrl && !loading && !error && (
          <img src={imageUrl} alt="Random from Picsum" />
        )}
      </div>
    );
  };
  
  export default PageThree;
