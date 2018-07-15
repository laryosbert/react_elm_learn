import React, { Component } from 'react'
import AddressSearch from '../../components/AddressSearch/addrSearch'
import { currentcity } from '../../services/getData'
import { withRouter } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import PropTypes from "prop-types"
import AddressSearchHistory from 'components/AddrSearchHistory/addrSearchHistory'
import CityChoose from 'components/CityChoose/cityChoose'
import { connect } from 'react-redux'
import { changeCity } from '../../redux/cityChooseAction'
import './Home.scss';


class Home extends Component {

    constructor(props, context) {
        super(props, context);        
    }

    componentDidMount() {
        this.props.changeCity();
    }

    componentwillreceiveprops(nextProps)
    {
        console.log(nextProps);
    }

    render() {        
        console.log(this.props.cityid);
        return (
            <div>
                <div className="container">
                    <div className="logo"></div>
                    <div className="nav">
                        <div className="searchCtn">
                            <CityChoose cityid={this.props.cityid} />
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

const mapStateToProps = (state) => {
    return {
        cityid: state.homePageReducer.cityID
    }
}

const mapDispatchToProps =
    {
        changeCity
    };


export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Home));