import axios from 'axios';
import { endpoint } from "../config/index";

export async function get(resource, body) {

    let access_token = localStorage.getItem('access_token');
    let url = endpoint + resource;

    let response = await axios.get(url,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });

    return response.data;
}

export async function post(resource, body) {

    let access_token = localStorage.getItem('access_token');
    let url = endpoint + resource;

    let response = await axios.post(url, {

    },
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });


    console.log(response);


}