import {ADMIN_SIGNIN_FAIL, ADMIN_SIGNIN_REQUEST, ADMIN_SIGNIN_SUCCESS} from "../constants/adminConstants";

function  adminSigninReducer(state={}, action) {
    switch(action.type) {
        case ADMIN_SIGNIN_REQUEST:
            return {loading: true};

        case ADMIN_SIGNIN_SUCCESS:
            return {loading: false, adminInfo: action.payload};

        case ADMIN_SIGNIN_FAIL:
            return  {loading: false, error: action.payload};

        default: return state;
    }
}

export {adminSigninReducer};