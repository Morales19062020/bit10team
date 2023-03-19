import React, { useState } from 'react';
<<<<<<< HEAD
// import 'bootstrap/dist/css/bootstrap.min.css';
=======
import 'bootstrap/dist/css/bootstrap.min.css';
>>>>>>> c75cfb76a43923e1ad3466ced58cbe63e78bdfe2
import axios from 'axios';
import '../App.css';

function Search() {
const [query, setQuery] = useState('');
const [results, setResults] = useState([]);

const Search = async () => {
    const response = await axios.get(`https://rickandmortyapi.com/api/character/?name=${query}`);
    setResults(response.data.results);
};

return (
    <>
    <input  type="text" value={query} onChange={(e) => setQuery(e.target.value)} />
    <button  onClick={Search} className="btn btn-warning">Search</button>
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


