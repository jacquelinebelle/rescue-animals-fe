import React, { Component } from 'react';
import { connect } from 'react-redux';
import './Donations.css';

export class Donations extends Component {

    render() {
        return (
            <ul>
                
            </ul>
        )
    }
}

export const mapStateToProps = (state) => ({
    donations: state.donations
  })
  
  
export default connect(mapStateToProps)(Donations)