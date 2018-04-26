
import fetch from '../config/fetch'

//获取当前所在城市
export const currentcity = number => fetch('/v1/cities/' + number);

//获取搜索地址
export const searchplace = (cityid, value) => fetch('/v1/pois', {
	type: 'search',
	city_id: cityid,
	keyword: value
});