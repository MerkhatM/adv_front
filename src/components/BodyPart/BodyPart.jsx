import React from 'react';
import { useState } from 'react';
import './BodyPart.css'; // Import the CSS file for styles

import Icon from '../../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    const [selected, setSelected] = useState(false);

    const handleClick = () => {
        setBodyPart(item);
        setSelected(true);
        window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    };

    return (
        <div
            className={`bodyPart-card ${selected ? 'selected' : ''}`}
            onClick={handleClick}
        >
            <img src={Icon} alt="dumbbell" className="bodyPart-icon" />
            <div className="bodyPart-text">{item}</div>
        </div>
    );
}

export default BodyPart;
