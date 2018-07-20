// @flow
import asyncComponent from 'common/asyncComponent'

export default [
    { 
        path: '/place',
        component: asyncComponent(() => import('./Place'))
    }
    // ,
    // { 
    //     path: '/place/:geohash',
    //     component: asyncComponent(() => import('./Place'))
    // },
]
