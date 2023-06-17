import React from 'react';
import './Country.css';

const Country = (props) => {
    console.log(props);
    return (
        <div className='country'>
            <h2> Country Name: {props.name} </h2>
            <p><small> Area: {props.area} </small></p>
            <p> Population: {props.population} </p>
        </div>
    );
};

export default Country;