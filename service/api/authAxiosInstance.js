import axios from "axios";
import {baseUrl} from "./constants";

//TODO: "쿠키로 accessToken가져오기";
export const setAuthApiClient = (context) => {
    let cookies = "context로 쿠키가져오기";
    return axios.create({
        baseURL: baseUrl,
        headers: {
            Authorization: `Bearer ${cookies['accessToken 쿠키이름']}`
        }
    });
}

