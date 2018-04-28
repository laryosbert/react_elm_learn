import React, { Component } from 'react';
import * as _ from 'lodash'
import { searchplace } from '../../services/getData'
import _fetch from '../../common/fetchTimeout'
//composition resolve onChange event Mime trigger issue
import reactComposition from 'react-composition'
import AddressItem from '../AddressItem/AddressItem'


class AddressSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTxt: '',
            finalTxt: '',
            inSearching: false,
            addrItems: []
        };
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

    render() {
        return (
            <div>
                <input key value={this.state.inputTxt} {...reactComposition({ onChange: this.InputSearchChange.bind(this) })}></input>
                {
                    this.state.inSearching &&
                    this.state.addrItems.map(item=>{
                        return <AddressItem item={item}></AddressItem>
                    })

                }
            </div>
        );
    }
}

export default AddressSearch;