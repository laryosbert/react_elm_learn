import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class AddressItem extends Component {
    render() {
        let { name, address, latitude, longitude } = this.props.item;
        return (
            <div>
                <div><Link to={`/place/latitude${latitude}&longitude${longitude}`}>{name}</Link></div>                
                <div>{address}</div>
            </div>
        );
    }
}

export default AddressItem;