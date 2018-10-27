import axios from 'axios';

class Mmc {

    login = async (grantType, username, password, clientId, clientSecret) => {

        let response = await axios.post('http://haccp.milady.io/oauth/token', {
            username,
            password,
            grant_type: grantType,
            client_id: clientId,
            client_secret: clientSecret,
        });

        console.log(response.data);

        localStorage.setItem('access_token', response.data.access_token);
    }

    logOut = () => {
        localStorage.removeItem('access_token');
    }

    checkAuth = async () => {

        let access_token = localStorage.getItem('access_token');

        if (access_token) {
            return true;
        }

        return false;
    }

    user = () => new Promise((result, reject) => {

        setTimeout(() => {

            result("RESULT FROM PROMISE");

        }, 2000);

    });

}


export default (new Mmc());


