import React, { Component } from 'react'
import AddressSearch from '../../components/AddressSearch/addrSearch'
import { currentcity } from '../../services/getData'
import { setStore, getStore, removeStore } from 'common/utils'
import { withRouter } from 'react-router-dom'
import PropTypes from "prop-types"
import AddressItem from 'components/AddressItem/AddressItem'

class Home extends Component {

    // static contextTypes = {
    //     router: PropTypes.object
    //   }

    constructor(props, context) {
        super(props, context);
        this.state = {
            cityid: 14,
            cityname: '',
            showHistory: true,
            placeSearchList: []
        };
    }

    componentDidMount() {
        currentcity(this.state.cityid).then(res => {
            this.setState({ cityname: res.name });
        })
        this.InitData();
    }

    InitData() {
        //获取搜索历史记录
        if (getStore('placeSearchHistory')) {
            this.setState({ placeSearchList: JSON.parse(getStore('placeSearchHistory')) });
        }
    }

    SelectedPlace(place, e) {
        e.preventDefault();
        console.log(place.latitude + ":" + place.longitude);

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
        setStore('placeSearchHistory', allHistory)
        // this.$router.push({path:'/msite', query:{geohash}})   
        this.history.push('/place')
    }

    HiddleHistory() {
        this.setState({ showHistory: false });
    }

    render() {
        return (
            <div>
                <label> This is the home page - {this.state.cityname}! </label>
                <AddressSearch cityid={this.props.cityid} SelectedPlace={this.SelectedPlace.bind(this.props)} HiddleHistory={this.HiddleHistory.bind(this)}></AddressSearch>
                {
                    this.state.showHistory &&
                    this.state.placeSearchList.map((item) => {
                        return <AddressItem key={item.geohash} item={item}></AddressItem>
                    })
                }
            </div>
        );
    }
}

// Home.contextTypes = {
//     router: PropTypes.routerContext
//   };

export default withRouter(Home);
// export default Home;