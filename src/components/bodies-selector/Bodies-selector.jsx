import React, {useEffect, useState} from 'react';
import './bodies.css';

const BodiesSelector = ({isPlanet, gravity, onSelect}) => {
    const [bodies, setBodies] = useState([]);

    useEffect(() => {
        fetch('https://api.le-systeme-solaire.net/rest.php/bodies/')
            .then((res) => res.json())
            .then((data) => {
                setBodies(data.bodies);
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, [onSelect]);
    const handleSelectChange = (event) => {
        const selectedValue = event.target.value;
        const selectedBody = bodies.find((body) => body.id === selectedValue);
        onSelect(selectedBody);
    };

    const filteredBodies = bodies.filter((body) => {
        const isPlanetCondition = isPlanet ? body.isPlanet : !body.isPlanet;
        const gravityCondition = body.gravity <= gravity;

        return isPlanetCondition && gravityCondition;
    });

    return (
        <div className="bodies-div">
            <h3>Bodies : </h3>
            <div className="select">
                <select onChange={handleSelectChange}>
                    <option defaultValue>Select</option>
                    {Array.isArray(filteredBodies) &&
                        filteredBodies.map((body) => (
                            <option key={body.id} value={body.id}>
                                {body.name}
                            </option>
                        ))}
                </select>
            </div>
        </div>
    );
}
export default BodiesSelector

