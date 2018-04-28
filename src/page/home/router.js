// @flow
import asyncComponent from 'common/asyncComponent'

export default [
    { 
        path: '/',
        exact: true,
        component: asyncComponent(() => import('./home'))
    },
    { 
        path: '/dd',        
        component: asyncComponent(() => import('./home'))
    },
    // ,
    // {
    //     path: '/game',
    //     component: asyncComponent(() => import('./one')),
    //     routes: [
    //         { path: '/one/child',
    //             component: asyncComponent(() => import('./child'))
    //         },
    //     ]
    // },
    // { path: '/other/:id',
    //     component: asyncComponent(() => import('./child'))
    // }

]
