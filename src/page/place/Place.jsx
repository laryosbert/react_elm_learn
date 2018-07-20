import React, { Component } from 'react';
import { getSStore } from 'common/utils';
import { msiteAddress, msiteFoodTypes } from '../../services/getData';
import Paper from '@material-ui/core/Paper';
import { Link, Route } from 'react-router-dom';

class Place extends Component {

    constructor(props) {
        super(props);
        this.state = {
            geohash: "",
            imgBaseUrl: 'https://fuss10.elemecdn.com',
            foodTypes: []
        }

    }

    componentDidMount() {
        let geohash = getSStore("geoHash");
        this.setState({ geohash: geohash });
        msiteAddress(geohash).then(res=>{
            console.log(res);
        })


        msiteFoodTypes(geohash).then(res => {
            let resLength = res.length;
            let resArr = [...res];
            this.setState({ foodTypes: resArr });
        }).then(() => {
            //初始化swiper
            // new Swiper('.swiper-container', {
            //     pagination: '.swiper-pagination',
            //     loop: true
            // });
        })
        console.log(geohash);
    }

    getCategoryId(url){
        let urlData = decodeURIComponent(url.split('=')[1].replace('&target_name',''));
        if (/restaurant_category_id/gi.test(urlData)) {
            return JSON.parse(urlData).restaurant_category_id.id
        }else{
            return ''
        }
    }

    render() {        
        return (
            <div>
                <div className="container">
                    <Paper elevation={1}>
                        {
                            this.state.foodTypes.length > 0 &&
                            this.state.foodTypes.map((item,index) => {
                                return (
                                    <div key={index}>
                                        <Link to='/food' query={{ geohash: this.state.geohash, title: item.title, restaurant_category_id: this.getCategoryId(item.link) }}>
                                        <img src={this.state.imgBaseUrl + item.image_url} />
                                        <span>{item.title}</span>
                                        </Link>
                                    </div>
                                );
                            })
                        }
                    </Paper>

                    {/* <nav class="msite_nav">
                        <div class="swiper-container" v-if="foodTypes.length">
                            <div class="swiper-wrapper">
                                <div class="swiper-slide food_types_container" v-for="(item, index) in foodTypes" :key="index">
                                    <router-link :to="{path: '/food', query: {geohash, title: foodItem.title, restaurant_category_id: getCategoryId(foodItem.link)}}" v-for="foodItem in item" :key="foodItem.id" class="link_to_food">
                                        <figure>
                                            <img :src="imgBaseUrl + foodItem.image_url">
                                            <figcaption>{{foodItem.title}}</figcaption>
                                        </figure>
                                    </router-link>
                                </div>
                            </div>
                            <div class="swiper-pagination"></div>
                        </div>
                        <img src="../../images/fl.svg" class="fl_back animation_opactiy" v-else>
                    </nav> */}
                </div>
            </div>
        );
    }
}


export default Place;