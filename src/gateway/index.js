import axios from 'axios';
import { endpoint, realm_endpoint } from "../config/index";

export async function realm(instance, bundle) {

    //document=Controle&realm_path=../haccp/public/uploads/375a3892440333de-1537483997/haccp-db-8.realm

    let access_token = localStorage.getItem('access_token');
    let document = instance;
    let realm_path = '../haccp/public/uploads/' + bundle + '/haccp-db-8.realm';

    let url = realm_endpoint + '?document=' + document + '&realm_path=' + realm_path;

    console.log(url);

    // base 46 encode 
    url = btoa(url);

    let gateway = endpoint + '/realm?url=' + url;

    

    let response = await axios.get(gateway,
        {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + access_token
            }
        });

    return response.data;
}

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