import React from 'react';
import './Country.css';

const Country = (props) => {
    // console.log(props.country);
    const {population,area,region,name,flags} = props.country;
    return (
        <div className='country'>
            {/* <h2> Name: {props.country.name.common} </h2> */}
            <h2> Name: {name.common} </h2>
            <img src={flags.png} alt="" />
            <p><small> Area: {area} </small></p>
            <p><small> Region: {region}</small></p>
            <p> Population: {population} </p>
        </div>
    );
};

export default Country;