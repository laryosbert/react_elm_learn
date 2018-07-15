import React, { Component } from 'react';
import { currentcity, groupcity } from '../../services/getData';
import Button from '@material-ui/core/Button';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { changeCity } from '../../redux/cityChooseAction';
import { connect } from 'react-redux'
import './cityChoose.scss'

class CityChoose extends Component {

    constructor(props) {
        super(props);
        this.state = {
            cityid: this.props.cityid || 14,
            cityname: '',
            reChoose: false,
            allCity: [],
            groupedCity: {}
        };
    }

    componentDidMount() {
        currentcity(this.state.cityid).then(res => {
            this.setState({ cityname: res.name });
        })
        //获取所有城市
        groupcity().then(res => {
            this.setState({ allCity: res });
            //将获取的数据按照A-Z字母开头排序
            let sortobj = {};
            for (let i = 65; i <= 90; i++) {
                if (res[String.fromCharCode(i)]) {
                    sortobj[String.fromCharCode(i)] = res[String.fromCharCode(i)];
                }
            }
            this.setState({ groupedCity: sortobj });
        })
    }

    changeCity(cityID) {
        currentcity(cityID).then(res => {
            this.setState({ cityid: cityID, cityname: res.name });
            this.props.dispatch(changeCity(cityID));
        })
    }

    btnOpenAllCity() {
        this.setState({ reChoose: true });
    }

    btnOnBlur() {
        this.setState({ reChoose: false });
    }

    render() {
        return (
            <div>
                <div>
                    <Button variant="contained" color="primary" className="btnCity"
                        onClick={this.btnOpenAllCity.bind(this)} onBlur={this.btnOnBlur.bind(this)} classes={{ label: "btnText" }}>
                        {this.state.cityname}
                        <ExpandMoreIcon />
                    </Button>
                </div>
                <div className="allCity">
                    {
                        this.state.reChoose &&
                        Object.keys(this.state.groupedCity).map(item => {
                            return (
                                <div className="dvDL" key={item}>
                                    <dl>
                                        <dt>
                                            {item}
                                        </dt>
                                        {this.state.groupedCity[item].map(row => {
                                            return (
                                                <dd key={row.id}>
                                                    <a href="javascript:" onMouseDown={this.changeCity.bind(this, row.id)}>{row.name}</a>
                                                </dd>
                                            )
                                        })}
                                    </dl>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        cityid: state.cityID
    }
}

export default connect(mapStateToProps)(CityChoose);

