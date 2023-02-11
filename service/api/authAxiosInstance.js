import axios from "axios";
import {baseUrl} from "./constants";

//TODO: "쿠키로 accessToken가져오기";
export const setAuthApiClient = (context) => {
    let cookies = "context로 쿠키가져오기";
    const tmpToken = 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxIiwiYXV0aCI6IlVTRVIiLCJleHAiOjE2Nzc2MDQ2MzV9.o9ZaxqFESKHNIM_sH68kqi48CX-8cM5Je2ClDXb4L761K0iu9IrP8VFdPKIQkfGegVO2-pWNXHJ2wtSfwJeqiw';
    return axios.create({
        baseURL: baseUrl,
        timeout: 12000,
        params: {},
        headers: {
            // Authorization: `Bearer ${cookies['accessToken 쿠키이름']}`
            Authorization: `Bearer ${tmpToken}`,
        }
    });
}

