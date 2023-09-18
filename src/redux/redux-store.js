import {applyMiddleware, combineReducers, compose, legacy_createStore as createStore} from "redux";
import thunkMiddleware from "redux-thunk"
import hackernews_reducer from "./hackernews_reducer";


let reducers = combineReducers({
    hackernews_reducer:hackernews_reducer,
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunkMiddleware)));

window.__store__ = store;

export default store;