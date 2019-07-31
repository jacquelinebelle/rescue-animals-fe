import React, { Component } from 'react';
import { connect } from 'react-redux';
import { thunkAnimals } from './thunks/fetchAnimals';
import { thunkDonations } from './thunks/fetchDonations';
import AnimalCards from './containers/AnimalCards';
import Donations from './containers/Donations';
import DonationForm from './containers/DonationForm';
import './App.css';

export class App extends Component {
  componentDidMount = async () => {
    this.props.thunkAnimals();
    this.props.thunkDonations();
  }

  render() {
    return (
      <div>
        {this.props.loading && <p>please wait while data is loading!</p>}
        {this.props.error && <p>there has been an error retrieving data. i'm so sorry.</p>}
        <DonationForm />
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
