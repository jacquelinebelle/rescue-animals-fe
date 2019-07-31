import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAnimals } from './thunks/fetchAnimals';
import AnimalCards from './components/AnimalCards';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    // const { setAnimals, isLoading, gotError } = this.props;

    // const animals = await thunkAnimals();
    // setAnimals(animals);
    this.props.thunkAnimals();
  }

  render() {
    return (
      <div>
        {this.props.loading && <p>please wait while animal data is loading!</p>}
        {this.props.error && <p>there has been an error retrieving animal data. i'm so sorry.</p>}
        <AnimalCards animals={this.props.animals} />
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  animals: state.animals
})

export const mapDispatchToProps = (dispatch) => ({
  thunkAnimals: () => dispatch(thunkAnimals())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
