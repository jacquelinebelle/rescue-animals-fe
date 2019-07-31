import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DonationList.css';

export class Donations extends Component {

    displayDonations = () => {
        return this.props.donations.map(donation => {
            return <li className="donation-card">{donation.name} just donated {donation.donation}!</li>
        })
    }

    render() {
        return (
            <aside>
                <h2 className="donation-heading">Recent Donations</h2>
                <ul className="donation-list">
                    {this.displayDonations()}
                </ul>
            </aside>
        )
    }
}

export const mapStateToProps = (state) => ({
    donations: state.donations
  })
  
  
export default connect(mapStateToProps)(Donations)