import { combineReducers, createStore,applyMiddleware, compose } from 'redux'
import thunk from 'redux-thunk'
import { userReducer } from './user/userReduser'
import { followersReducer } from './followers/followersReducer'
import { registrationReducer } from './registration/registrationReducer'
import { notificationsReducer } from './notifications/notificationReducer'
import { homeReducer } from './home/homeReducer'
import {getTokens, setAuthToken} from "./tokens/tokens";
import { tweetReducer } from './tweet/tweetReducer';
import { mainPageReducer } from './mainPage/mainPageReducer'




const rootReducer = combineReducers({
    main: mainPageReducer,
    user: userReducer,
    followers: followersReducer,
    registration : registrationReducer,
    notifications: notificationsReducer,
    home: homeReducer,
    tweet: tweetReducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const configureAppStore = () => {
    const store = createStore(
        rootReducer,
        composeEnhancers(applyMiddleware(thunk))
    )
    const {accessToken} = getTokens();
    if (accessToken) {
        setAuthToken(accessToken);
    }

    return store;
};
