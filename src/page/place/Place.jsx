import React, { Component } from 'react';

class Place extends Component {
    render() {
        return (
            <div>                
                <label> Chosed a place!</label> 
                <label> {JSON.stringify(this.props.match)} </label> 
                <label> {JSON.stringify(this.props.location)} </label> 
                <label> {JSON.stringify(this.props.history)} </label> 
            </div>
        );
    }
}

export default Place;