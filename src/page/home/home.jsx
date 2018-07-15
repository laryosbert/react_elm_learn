import React, { Component } from 'react'
import AddressSearch from '../../components/AddressSearch/addrSearch'
import { currentcity } from '../../services/getData'
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types"
import AddressSearchHistory from 'components/AddrSearchHistory/addrSearchHistory'
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Home.scss';


class Home extends Component {

    constructor(props, context) {
        super(props, context);
        this.state = {
            cityid: 14,
            cityname: '',
            showHistory: true           
        };
    }

    componentDidMount() {
        currentcity(this.state.cityid).then(res => {
            this.setState({ cityname: res.name });
        })        
    }
     
    render() {
        return (
            <div>
                <div className="container">
                    <div className="logo"></div>
                    <div className="nav">
                        <div className="searchCtn">
                            <Button variant="contained" color="primary" classes={{ label: "btnText" }}>
                                {this.state.cityname}
                                <ExpandMoreIcon />
                            </Button>
                            <AddressSearch cityid={this.props.cityid} ></AddressSearch>
                            <Button variant="contained" color="secondary" classes={{ label: "btnText" }} className="btnSearch">搜索</Button>
                        </div>
                        <AddressSearchHistory />
                    </div>                   
                </div>
            </div>
        );
    }
}

export default withRouter(Home); 