import store from "../store";
import { setFormErrors } from "../store/app";
import { objectToQueryParams } from "./helper";

const baseURL = import.meta.env.VITE_API_URL;
const request = async (url, method, params = false) => {

    const token = localStorage.getItem('token') ? JSON.parse(localStorage.getItem('token')) : '';

    let headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        'Language': store.getState().app.language
    };

    if (token) {
        headers.Authorization = `Bearer ${token}`
    }

    let options = {
        method,
        headers
    }

    if (params) options.body = JSON.stringify(params)

    store.dispatch(setFormErrors(false))
    
    const api = await fetch(baseURL + url, options)

    if (api.ok) {
        return await api.json();
    }
    else if (api.status === 404) {
        return {status: 404}
    }
    else if (api.status === 401) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        window.location.reload();
        return false;
    }
    else if (api.status === 422) {
        const data = await api.json();
        store.dispatch(setFormErrors(data))
        return {status: 422}
    }
    else {
        return {status: 500}
    }
}


export const get = (url, params = false) => request(url + (params ? '?' + objectToQueryParams(params) : ''), "GET")
export const post = (url, params) => request(url, "POST", params)
export const destroy = (url) => request(url, "DELETE")