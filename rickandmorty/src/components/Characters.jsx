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
                    <div className='card'  >
                        <img style={{ borderRadius: '70%' }} src={item.image} alt="" />
                        {/* <div className='card-body'> */}
                            <h5 style={{ padding: '1em' }}  >{item.name}</h5>
                            <hr />
                            <p>species: {item.species}</p>
                            <p>location: {item.location.name}</p>
                        {/* </div> */}
                    </div>
                </div>
            ))}
    </div>
    </>

);
};

export default Characters;
