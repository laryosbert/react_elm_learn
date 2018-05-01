// @flow
import asyncComponent from 'common/asyncComponent'

export default [
    { 
        path: '/place',
        component: asyncComponent(() => import('./Place'))
    }
    // ,
    // { 
    //     path: '/place/2',
    //     component: asyncComponent(() => import('./Place'))
    // },
]
