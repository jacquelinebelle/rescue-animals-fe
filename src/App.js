import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAnimals } from './api/fetchAnimals';
import { setAnimals, isLoading, gotError } from './actions';
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

      </div>
    )
  }
}

export const mapDispatchToProps = (dispatch) => ({
  thunkAnimals: () => dispatch(thunkAnimals())
})

export default connect(null, mapDispatchToProps)(App)
