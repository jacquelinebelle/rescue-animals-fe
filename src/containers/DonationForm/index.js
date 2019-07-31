import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addDonation } from '../../actions';
import './DonationForm.css';

export class DonationForm extends Component {

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const name = this.state.name;
        const donation = parseInt(this.state.donation);
        this.props.addDonation(name, donation);
    }

    render() {
        return (
            <form className="donation-form">
                <input className="name-input" name="name" type="text" onChange={this.handleChange} />
                <input className="donation-input" name="donation" type="number" onChange={this.handleChange} />
                <button className="submit-donation-btn" onClick={this.handleSubmit}>Donate!</button>
            </form>
        )
    }
}

export const mapDispatchToProps = (dispatch) => ({
    addDonation: (name, donation) => dispatch(addDonation(name, donation))
  })
  
  export default connect(null, mapDispatchToProps)(DonationForm)
  