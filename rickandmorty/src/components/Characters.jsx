import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Search from './Search'

const Characters = ({characters }) => {
return (
    <>
    <Search  />
    <div className='row'>
        {characters.map((item, index) =>(
                <div key={index} className='col mb-4'>
                    <div className='card' style={{minWidth: "50px", padding: "0.5em", borderRadius: "20px", boxShadow: "0px 0px 10px rgba(0,0,0,0.2)", transition: "box-shadow 0.3s ease" }}>
                        <img src={item.image} alt="" />
                        <div className='card-body'>
                            <h5 className='card-title' >{item.name}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
    </>

);
};

export default Characters;
