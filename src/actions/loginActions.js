import axios from 'axios';

export function makeLogin(grantType, username, password, clientId, clientSecret) {
    return async function (dispatch) {

        let response = await axios.post('http://haccp.milady.io/oauth/token', {
            username,
            password,
            grant_type: grantType,
            client_id: clientId,
            client_secret: clientSecret,
        });

        let accessToken = response.data.access_token;


        dispatch({
            type: 'LOGIN',
            payload: accessToken,
        });
    }
}