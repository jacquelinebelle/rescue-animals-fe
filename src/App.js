import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAnimals } from './thunks/fetchAnimals';
import { thunkDonations } from './thunks/fetchDonations';
import AnimalCards from './containers/AnimalCards';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    this.props.thunkAnimals();
    this.props.thunkDonations();
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
  animals: state.animals,
  donations: state.donations
})

export const mapDispatchToProps = (dispatch) => ({
  thunkAnimals: () => dispatch(thunkAnimals()),
  thunkDonations: () => dispatch(thunkDonations())
})

export default connect(mapStateToProps, mapDispatchToProps)(App)
