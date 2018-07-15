import React, { Component } from 'react';
import * as _ from 'lodash'
import { searchplace } from '../../services/getData'
import _fetch from '../../common/fetchTimeout'
//composition resolve onChange event Mime trigger issue
import reactComposition from 'react-composition'
import AddressItem from '../AddressItem/AddressItem'
import { Link } from 'react-router-dom'
import { Lifecycle } from 'react-router'
import './addrSearch.scss'

class AddressSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTxt: '',
            finalTxt: '',
            inSearching: false,
            addrItems: []
        };
        // this.props.route. .setRouteLeaveHook(
        //     this.props.route,
        //     this.routerWillLeave
        //   )
    }

    //throttle the trigger condition, every 500 only once
    _SearchAddress = _.throttle(this.SearchAddress, 500)

    SearchAddress() {
        let schTxt = this.state.inputTxt;
        _fetch(searchplace(this.props.cityid, schTxt), 2000).then(res => {
            console.log(res);
            this.setState({
                inSearching: true,
                addrItems: res
            });            
        })
    }

    InputSearchChange(e) {
        var value = e.target.value
        if (e.reactComposition.composition === false) {
            this.setState({
                finalTxt: value
            });

            if (value.length > 0) {
                this.SearchAddress();
            }
        }
        this.setState({ inputTxt: value })
    }
 

    routerWillLeave(nextLocation) {        
        console.log('before leave log');
        return false;
    }

    inputOnFocus(){
        this.setState({ inSearching: true });
    }

    inputOnBlur(){
        this.setState({ inSearching: false }); 
    }


    render() {
        return (
            <div>
                <input key value={this.state.inputTxt} {...reactComposition({ onChange: this.InputSearchChange.bind(this) })}
                    onFocus={this.inputOnFocus.bind(this)} onBlur={this.inputOnBlur.bind(this)} className="asInput"></input>
                <div className="addrSHResult">                
                    {
                        this.state.inSearching &&
                        this.state.addrItems.map(item=>{                            
                            return (
                            <AddressItem key={item.geohash} item={item}></AddressItem>
                            );                        
                        })
                    }
                </div>
            </div>
        );
    }

   
}

export default AddressSearch;