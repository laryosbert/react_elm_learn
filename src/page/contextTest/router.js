// @flow
import asyncComponent from 'common/asyncComponent'

export default [
    { 
        path: '/context',
        exact: true,
        component: asyncComponent(() => import('./context'))
    } 

]
