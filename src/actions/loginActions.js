import axios from 'axios';
import config from "../config/index";


export function initLogin() {
    return async function (dispatch) {

        let access_token = localStorage.getItem('access_token');

        let auth = false;

        if (access_token) {
            auth = true;
        }

        dispatch({
            type: 'INIT_LOGIN',
            payload: auth,
        });
    }
}


export function makeLogin(grantType, username, password, clientId, clientSecret) {
    return async function (dispatch) {

        let response = await axios.post(config.gateway, {
            username,
            password,
            grant_type: grantType,
            client_id: clientId,
            client_secret: clientSecret,
        });

        let accessToken = response.data.access_token;

        localStorage.setItem('access_token', accessToken);

        dispatch({
            type: 'LOGIN',
            payload: accessToken,
        });
    }
}

export function logOut() {
    return async function (dispatch) {

        await localStorage.removeItem('access_token');

        dispatch({
            type: 'LOGOUT',
        });
    }
}