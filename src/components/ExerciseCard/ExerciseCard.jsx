import React from 'react';
import { Link } from 'react-router-dom';
import './ExerciseCard.css';

const ExerciseCard = ({ exercise }) => {
    return (
        <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
            <img src={exercise.gifUrl} alt={exercise.name} loading="lazy" />
            <div className='button-container'>
                <button className='custom-button'>
                    {exercise.bodyPart}
                </button>
                <button className='custom-button'>
                    {exercise.target}
                </button>
            </div>
            <div className='exercise-name'>
                {exercise.name}
            </div>
        </Link>
    );
}

export default ExerciseCard;
