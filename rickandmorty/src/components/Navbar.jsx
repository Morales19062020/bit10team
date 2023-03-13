import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Characters  from './Characters';

const Navbar  = ({characters}) => {
return (
    <BrowserRouter>
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container mt-3'>
        <h1 className='text-white ' >Rick and morty App</h1>

        </div>
        <Link className='mx-2 btn btn-warning list' to='/'>
        HOME
        </Link>
        <Link className='mx-2 btn btn-warning' to='/favorites'>
            FAVORITES
        </Link>
        
        
    </nav>
    <Routes>
        <Route path='/' element={<Characters characters={characters} />} />
    </Routes>
    </BrowserRouter>
);
};

export default Navbar;