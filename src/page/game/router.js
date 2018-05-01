// @flow
import asyncComponent from 'common/asyncComponent'

export default [
    { 
        path: '/game',
        component: asyncComponent(() => import('./Game'))
    }
    ,
    { 
        path: '/game/1',
        component: asyncComponent(() => import('./Game'))
    },
]
