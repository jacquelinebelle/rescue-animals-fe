import React, { Component } from 'react';
import { connect } from 'react-redux';
import './AnimalCards.css';

export class AnimalCards extends Component {
    displayAnimals = () => this.props.animals.map(animal => {
        return <div className="animal-card">
            <img className="animal-pic" src={animal.img} alt='animal photo' />
            <h2 className="animal-name">{animal.name}</h2>
            <p className="animal-species">{animal.species}</p>
            <p className="animal-description">{animal.description}</p>
        </div>
    });

    render() {
        return (
            <main className="gallery">
                {this.displayAnimals()}
            </main>
        )
    }
}

export const mapStateToProps = (state) => ({
    animals: state.animals
  })
  
  
export default connect(mapStateToProps)(AnimalCards)