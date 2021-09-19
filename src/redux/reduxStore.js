import thunkMiddleware from "redux-thunk";
import heroesReducer from "./heroesReducer";
const { createStore, combineReducers, applyMiddleware } = require("redux");


let reducers = combineReducers({
    heroesPage: heroesReducer
});

let store = createStore(reducers, applyMiddleware(thunkMiddleware));

window.store = store;

export default store;