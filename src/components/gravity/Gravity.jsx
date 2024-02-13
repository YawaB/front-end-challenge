import React, {useEffect, useState} from 'react';
import './gravity.css';

const Gravity = ({changeGravity, }) => {
    const [gravity, setGravity] = useState(12.5);

    useEffect(() => {
        const gravityValue = document.querySelector('.cursor-line');
        const handleInputChange = (event) => {
            const gravityValue = event.target.value;
            setGravity(gravityValue);
            if (changeGravity) {
                changeGravity(gravityValue);
            }
        };

        gravityValue.addEventListener('input', handleInputChange);

        return () => {
            gravityValue.removeEventListener('input', handleInputChange);
        };
    }, [changeGravity]);

    return (
        <div className="gravity-field">
            <div className="slider-value">
                <span>{gravity}</span>
            </div>
            <div className="slider-input">
                <input
                    type="range"
                    min="0"
                    max="25"
                    value={gravity}
                    step="1"
                    onChange={() => {}}
                    className="cursor-line"
                />
            </div>
            <div className="slider-content">
                <small>Gravity</small>
            </div>
        </div>
    )
}
export default Gravity
