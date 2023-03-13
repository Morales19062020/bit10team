import React, { useState, useEffect } from "react";
import Navbar from './components/Navbar';


function App() {
  const [searchResults, setSearchResults] = useState([]);
  const initialUrl = "https://rickandmortyapi.com/api/character";

    const fetchCharacters = (url) => {
      fetch(url)
    .then(response => response.json())
    .then(data => setSearchResults(data.results))
    .catch(error => console.log(error))
    };
  
    useEffect(() => {
      fetchCharacters(initialUrl);
    }, [])
  
      return (
        <>
          <Navbar characters={searchResults}  brand="Rick and Morty App" />
        <div className='container mt-5'>
          </div>
          </>
  );
}

export default App;










