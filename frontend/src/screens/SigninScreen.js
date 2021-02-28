import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {signin} from "../actions/adminActions";

function SigninScreen(props) {

    const [email, setEmail]= useState("");
    const [password, setPassword]= useState("");
    const adminSignin= useSelector(state => state.adminSignin);
    const {loading, adminInfo, error}= adminSignin;
    const dispatch = useDispatch();

    useEffect(() => {
        if(adminInfo) {
            props.history.push("/");
        }
        return () => {
            //
        };
    }, [adminInfo]);

    const submitHandler=(e) => {
        e.preventDefault();
        dispatch(signin(email, password));
    }
    return  <div className="form"><form onSubmit={submitHandler}>
        <ul className="form-container">
            <li>
                <h3>Signin</h3>
            </li>
            <li>
                {loading && <div>Loading...</div>}
                {error && <div>{error}</div>}
            </li>
            <li>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}></input>
            </li>
            <li>
                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange={(e) => setPassword(e.target.value)}></input>
            </li>
            <li>
                <button type="submit" className="button primary">Signin</button>
            </li>
            <li>
                **Note** This page is only for admins.
            </li>
        </ul>
    </form>
    </div>
}

export default SigninScreen;