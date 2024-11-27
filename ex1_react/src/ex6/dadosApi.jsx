import React, { useEffect, useState } from 'react';

const Characters = () => {
    const [characters, setCharacters] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch('https://stranger-things-api.fly.dev/api/v1/characters')
            .then(response => {
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                return response.json();
            })
            .then(data => {
                setCharacters(data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setError(error.message);
            });
    }, []);

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <div>
            <h1>Stranger Things Characters</h1>
            <ul>
                {characters.map(character => (
                    <li key={character.id}>
                        <h2>{character.name}</h2>
                        <img src={character.photo} alt={character.name} />
                        <p>Status: {character.status}</p>
                        <p>Ator: {character.portrayedBy}</p>
                        <p>Genero: {character.gender}</p>
                        <p>Morada: {character.residence}</p>
                        <p>Ocupação: {character.occupation}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Characters;

