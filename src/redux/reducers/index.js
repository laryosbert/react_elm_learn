import {
  combineReducers
} from 'redux'

import {CITY_CHOOSE} from '../actionTypes'

const REQUEST_POSTS = 'REQUEST_POSTS'
const RECEIVE_POSTS = 'RECEIVE_POSTS'
const SELECT_SUBREDDIT = 'SELECT_SUBREDDIT'
const INVALIDATE_SUBREDDIT = 'INVALIDATE_SUBREDDIT'

function selectedSubreddit(state = 'reactjs', action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
    default:
      return state
  }
}

function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: []
  },
  action
) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
      return Object.assign({}, state, {
        didInvalidate: true
      })
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        isFetching: true,
        didInvalidate: false
      })
    case RECEIVE_POSTS:
      return Object.assign({}, state, {
        isFetching: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdated: action.receivedAt
      })
    default:
      return state
  }
}

function postsBySubreddit(state = {}, action) {
  switch (action.type) {
    case INVALIDATE_SUBREDDIT:
    case RECEIVE_POSTS:
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        [action.subreddit]: posts(state[action.subreddit], action)
      })
    default:
      return state
  }
}

function homePageReducer(state = {}, action) {
  switch (action.type) {
    case CITY_CHOOSE:
      return Object.assign({}, state, {
        cityID: action.cityID
      })
    default:
      return state
  }

}

const rootReducer = combineReducers({
  postsBySubreddit,
  selectedSubreddit,
  homePageReducer
})

export default rootReducer