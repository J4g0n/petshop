import 'whatwg-fetch';
import { baseUrl } from '../config';


export const addPet = (name) => {
    const url = baseUrl + "addPet";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ "name": name }),
        mode: "cors"
    }).then(
        response => {
            return response.json();
        },
        error => {
            console.error(error);
        }
    );
};

export const deletePet = (id) => {
    const url = baseUrl + "removePet/" + id;
    return fetch(url, {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors"
    }).then(
        response => {
            return response.json();
        },
        error => {
            console.error(error);
        }
    );
};

export const getPets = () => {
    const url = baseUrl + "pets";
    return fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
        mode: "cors"
    }).then(
        response => {
            return response.json();
        },
        error => {
            console.error(error);
        }
    );
};