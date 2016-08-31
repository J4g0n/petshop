import 'whatwg-fetch';
import { baseUrl } from '../config';

const validForm = (form) => {
    const { name, age, gender, race } = form;
    // todo implement same rules as on backend, don't have time right now
    return true;
};

export const addPet = (form) => {
    if (!validForm(form)) {
        throw new Error("Invalid form datas: ", form);
    }
    console.log("PET FORM: ", form);
    const url = baseUrl + "addPet";
    return fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(form),
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