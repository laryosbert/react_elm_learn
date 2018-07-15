import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { setStore, getStore, removeStore } from 'common/utils'

class AddressItem extends Component {

    SelectedPlace() {       
        let place = this.props.item;
        let history = getStore('placeSearchHistory');
        let choosePlace = place;
        let checkrepeat = false;
        let allHistory = [];
        if (history) {
            allHistory = JSON.parse(history);
            allHistory.forEach(item => {
                if (item.latitude == choosePlace.latitude && item.longitude == choosePlace.longitude) {
                    checkrepeat = true;
                }
            })
            if (!checkrepeat) {
                allHistory.push(choosePlace)
            }
        } else {
            allHistory.push(choosePlace)
        }
        setStore('placeSearchHistory', allHistory);
        // this.history.push('/place')
    }

    clickLink(event)
    {
        this.SelectedPlace();
        event.target.click();        
    }

    render() {
        let { name, address, latitude, longitude } = this.props.item;
        return (
            <div>
                <div><Link onMouseDown={this.clickLink.bind(this)} to={`/place/latitude${latitude}&longitude${longitude}`}>{name}</Link></div>                
                <div>{address}</div>
            </div>
        );
    }
}

export default AddressItem;