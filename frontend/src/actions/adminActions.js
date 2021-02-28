import Axios from "axios";
import Cookie from "js-cookie";
import {
    ADMIN_LOGOUT,
    ADMIN_SIGNIN_FAIL,
    ADMIN_SIGNIN_REQUEST,
    ADMIN_SIGNIN_SUCCESS,
} from "../constants/adminConstants";

const signin= (email, password) => async (dispatch) => {
    dispatch({type: ADMIN_SIGNIN_REQUEST, payload: {email, password}});
    try {
        const {data}= await Axios.post("/api/users/signin", {email, password});
        dispatch({type: ADMIN_SIGNIN_SUCCESS, payload: data});
        Cookie.set("adminInfo", JSON.stringify(data));
    } catch(error) {
        dispatch({type: ADMIN_SIGNIN_FAIL, payload: error.message})
    }
}

const logout =() => (dispatch) => {
    Cookie.remove("adminInfo");
    dispatch({type: ADMIN_LOGOUT})
}

export {signin, logout};