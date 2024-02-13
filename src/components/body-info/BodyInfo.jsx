import React from 'react'
import './body-info.css'

const NOT_DEFINED ='Undefined';
const BodyInfo = ({body, isPlanet}) => {


    return (
        <div className="body-info">
            {body ? (
                <div>
                    <h3>{body.name}</h3>
                    <p>Gravity: {body.gravity ?? NOT_DEFINED}</p>
                    <p>Is Planet: {body.isPlanet ? 'Yes' : 'No'}</p>
                    <p>Mass: {body.mass ? body.mass.massValue * Math.pow(10, body.mass.massExponent) +'kg' : NOT_DEFINED} </p>
                    </div> ) : (
                <p>Select a body</p>
            )}
        </div>
    );
}
export default BodyInfo
