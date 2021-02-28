import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk";
import Cookie from "js-cookie";
import {adminSigninReducer} from "./reducers/adminReducers";
import {bookDetailsReducer, bookListReducer, bookSaveReducer, bookDeleteReducer} from "./reducers/bookReducers";

const adminInfo= Cookie.getJSON("adminInfo") || null;

const initialState= {};
const reducer= combineReducers({
    adminSignin: adminSigninReducer,
    bookList: bookListReducer,
    bookDetails: bookDetailsReducer,
    bookSave: bookSaveReducer,
    bookDelete: bookDeleteReducer
});

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store= createStore(reducer, initialState, composeEnhancer(applyMiddleware(thunk)));

export default store;
