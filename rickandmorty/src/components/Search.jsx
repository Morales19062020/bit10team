import React, { useState } from 'react';
import axios from 'axios';

function Search() {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const Search = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
    setResults(response.data.results);
};

return (
    <>
    <input type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    <button onClick={Search} className="btn btn-warning">Search</button>
    <div>
    <ul>
        {results.map((character) => (
        <li key={character.id}>
            <h2>{character.name}</h2>
            <img src={character.image} alt={character.name} />
            <p>{character.status}</p>
        </li>
        ))}
    </ul>
    </div>
    </>
);
}

export default Search;
