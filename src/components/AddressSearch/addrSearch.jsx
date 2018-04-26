import React, { Component } from 'react';
import * as _ from 'lodash'
import { searchplace } from '../../services/getData'
import _fetch from '../../common/fetchTimeout'
//composition resolve onChange event Mime trigger issue
import reactComposition from 'react-composition'


class AddressSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            inputTxt: '',
            finalTxt: ''
        };
    }

    //throttle the trigger condition, every 500 only once
    _SearchAddress = _.throttle(this.SearchAddress, 500)

    SearchAddress() {
        let schTxt = this.state.inputTxt;
        _fetch(searchplace(this.props.cityid, schTxt), 2000).then(res => {
            // searchplace(this.props.cityid, schTxt).then(res => {
            console.log(res);
        })
    }

    InputSearchChange(e) {
        // let schTxt = e.target.value;
        // if (schTxt.length > 0) {
        //     this.SearchAddress();
        // }
        // this.setState({ inputTxt: schTxt });


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
                {/* <input value={this.state.inputTxt} onChange={this.InputSearchChange.bind(this)}></input> */}
                <input value={this.state.inputTxt} {...reactComposition({ onChange: this.InputSearchChange.bind(this) })}></input>
            </div>
        );
    }
}

export default AddressSearch;