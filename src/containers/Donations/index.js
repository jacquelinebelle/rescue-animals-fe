import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Donations.css';

export class Donations extends Component {

    displayDonations = () => {
        return this.props.donations.map(donation => {
            return <li>{donation.name} just donated {donation.donation}!</li>
        })
    }

    render() {
        return (
            <ul>
                {this.displayDonations()}
            </ul>
        )
    }
}

export const mapStateToProps = (state) => ({
    donations: state.donations
  })
  
  
export default connect(mapStateToProps)(Donations)