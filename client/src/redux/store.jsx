import { combineReducers, createStore,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user/userReduser'
import { followersReducer } from './followers/followersReducer'
import { registrationReducer } from './registration/registrationReducer'
import { notificationsReducer } from './notifications/notificationReducer'




const rootReducer = combineReducers({
    user: userReducer,
    followers: followersReducer,
    registration : registrationReducer,
    notifications: notificationsReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);
