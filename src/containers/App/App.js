import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAnimals } from '../../thunks/fetchAnimals';
import { thunkDonations } from '../../thunks/fetchDonations';
import AnimalCards from '../AnimalCards';
import Donations from '../DonationList';
import DonationForm from '../DonationForm';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    this.props.thunkAnimals();
    this.props.thunkDonations();
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Animal Rescue</h1>
        <DonationForm />
        </header>
        {this.props.loading && <p>Please wait while data is loading!</p>}
        {this.props.error && <p>There has been an error retrieving data.</p>}
        <AnimalCards />
        <Donations />
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
