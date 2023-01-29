import axios from "axios";
import {baseUrl} from "./constants";

export function setApiClinet() {
    const axiosInstance = axios.create({
        timeout: 12000,
        baseURL: baseUrl,
        params: {}
    });

    // axiosInstance.interceptors.response.use(
    //     // 응답 데이터를 가공
    //     response => response,
    //     // 오류 응답을 처리
    //     error => console.log(error)
    // );

    return axiosInstance;
}
