import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAnimals } from './api/fetchAnimals';
import { setAnimals } from './actions';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    const animals = await fetchAnimals();
    this.props.setAnimals(animals);
  }

  render() {
    return (
      <div>

      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  setAnimals: animals => dispatch(setAnimals(animals))
})

export default connect(null, mapDispatchToProps)(App)
