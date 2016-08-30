import 'whatwg-fetch';
import { baseUrl } from '../config';


export const addPet = (name) => {
    return fetch("http://localhost:9000/addPet", {
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

export const getPets = () => {
    return fetch("http://localhost:9000/pets", {
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