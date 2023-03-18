import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import  Characters  from './Characters';
import Favorites from './Favorites';
import Nosotros from './Nosotros';


const Navbar  = ({characters}) => {
return (
    <BrowserRouter>
    <nav className='navbar navbar-dark bg-dark'>
        <div className='container mt-2'>
        <h1 className='text-white ' >Rick and morty App</h1>

        </div>
        <table>
            <th>
            
            <Link class="navi" className='mx-2 btn btn-warning ' to='/'>
        HOME
        </Link>
        <Link class="navi" className='mx-2 btn btn-warning' to='/favorites'>
            FAVORITES
        </Link>
        <Link class="navi" className='mx-2 btn btn-warning' to='/nosotros'>
            NOSOTROS
        </Link>
        
            
        
        
            </th>

        </table>
        
    </nav>
    <Routes>
        <Route path='/' element={<Characters characters={characters} />} />
        <Route path='/favorites' element={<Favorites characters={characters} />} />
        <Route path='/nosotros' element={<Nosotros />} />
        
    </Routes>
    </BrowserRouter>
);
};

export default Navbar;