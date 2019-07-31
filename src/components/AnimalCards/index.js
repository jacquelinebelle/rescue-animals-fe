import React from 'react';

export const AnimalCards = ({ animals }) => {
    const displayAnimals = () => animals.map(animal => {
        return <div className="animal-card">
            <img src={animal.img} alt='animal photo' />
            <h2>{animal.name}</h2>
            <p>{animal.species}</p>
            <p>{animal.description}</p>
        </div>
    });

    return (
        <main>
            {displayAnimals()}
        </main>
    )
}

export default AnimalCards;