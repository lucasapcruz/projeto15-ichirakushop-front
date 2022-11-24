import axios from "axios"

const BASE_URL = "http://localhost:5000";

export function signUp(body) {
    return axios.post(`${BASE_URL}/sign-up`,body)
};

export function signIn(body){
    return axios.post(`${BASE_URL}/sign-in`,body)
}
