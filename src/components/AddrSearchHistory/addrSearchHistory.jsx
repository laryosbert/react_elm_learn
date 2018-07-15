import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import AddressItem from 'components/AddressItem/AddressItem'
import './addrSearchHistory.scss'
import { setStore, getStore, removeStore } from 'common/utils'

class AddrSearchHistory extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            placeSearchList: []
        };
    }

    componentDidMount()
    {
        let plcSH = getStore('placeSearchHistory');
        if (plcSH) {
            this.setState({ placeSearchList: JSON.parse(plcSH) });
        }
    }

    render() {
        return (
            <div className="addrSH">
                <div className="addrSHCenter">
                {
                this.state.placeSearchList.map((item) => {
                    return <AddressItem key={item.geohash} item={item}></AddressItem>
                })
                }
                </div>               
            </div>
        );
    }
}

export default AddrSearchHistory;