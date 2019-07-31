import React from 'react';
import './AnimalCards.css';

export const AnimalCards = ({ animals }) => {
    const displayAnimals = () => animals.map(animal => {
        return <div className="animal-card">
            <img className="animal-pic" src={animal.img} alt='animal photo' />
            <h2 className="animal-name">{animal.name}</h2>
            <p className="animal-species">{animal.species}</p>
            <p className="animal-description">{animal.description}</p>
        </div>
    });

    return (
        <main>
            {displayAnimals()}
        </main>
    )
}

export default AnimalCards;