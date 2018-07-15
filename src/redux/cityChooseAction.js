import {
    CITY_CHOOSE
} from './actionTypes'

// 
export const changeCity = (cityID = 14) => {
    return {
        type: CITY_CHOOSE,
        cityID
    }
}