import 'whatwg-fetch';
import { baseUrl } from '../config';


export const addPet = (data) => {
    fetch(baseUrl + "addPet", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data),
        mode: "no-cors"
    }).then(
        (response) => {
            console.debug(response);
        },
        (error) => {
            console.error(error);
        }
    );
};

export const getPets = () => {
    return fetch("http://localhost:9000/pets", {
            method: "GET",
            headers: {
                //'Accept': 'application/json',
                "Content-Type": "application/json"
            },
            mode: "cors"
    }).then(response => {
        return response.json();
    });
};