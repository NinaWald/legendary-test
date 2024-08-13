import React, { useState, useEffect, useRef } from 'react';
import '../first.css';

const First = () => {
  const [pokemonImages, setPokemonImages] = useState([]);
  const imageRefs = useRef([]);

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=50');
        const data = await response.json();
        const promises = data.results.map(async (pokemon) => {
          const res = await fetch(pokemon.url);
          const pokemonData = await res.json();
          return pokemonData.sprites.front_default;
        });
        const images = await Promise.all(promises);
        setPokemonImages(images);
      } catch (error) {
        console.error("Error fetching Pokémon data: ", error);
      }
    };

    fetchPokemon();
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 } // Adjusts when the fade-in effect is triggered
    );

    imageRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, [pokemonImages]);

  return (
    <div className="pokemon-container">
      <h2 className="pokemon-title">Pokémon Images</h2>
      <div className="pokemon-images">
        {pokemonImages.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Pokemon ${index + 1}`}
            loading="lazy"
            className="pokemon-image"
            ref={(el) => (imageRefs.current[index] = el)}
          />
        ))}
      </div>
    </div>
  );
};

export default First;



