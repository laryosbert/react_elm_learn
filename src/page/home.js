import React, { Component } from 'react';
import AddressSearch from '../components/AddressSearch/addrSearch'
import {currentcity} from '../services/getData'



class home extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityid: 14,
            cityname:''
        };
    }

    componentDidMount()
    {
        currentcity(this.state.cityid).then(res => {
            this.setState({cityname:res.name});            
        })
    }

    render() {
        return (
            <div>
                <label> This is the home page - {this.state.cityname}! </label>
                <AddressSearch cityid={this.props.cityid}></AddressSearch>
            </div>
        );
    }
}

export default home;