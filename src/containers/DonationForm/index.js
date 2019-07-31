import React, { Component } from 'react';
import { connect } from 'react-redux';
import './DonationForm.css';

export class DonationForm extends Component {

    handleChange = (e) => {
        
    }

    handleSubmit = (e) => {

    }

    render() {
        return (
            <form className="donation-form">
                <input className="name-input" type="text" onChange={this.handleChange} />
                <input className="donation-input" type="number" onChange={this.handleChange} />
                <button className="submit-donation-btn" onClick={this.handleSubmit}>submit</button>
            </form>
        )
    }
}

export default DonationForm;