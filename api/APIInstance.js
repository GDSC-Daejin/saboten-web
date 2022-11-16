import axios from "axios";

const BASE_URL = 'https://gdsc-saboten.herokuapp.com';
const POST_BASE_URL = 'https://jsonplaceholder.typicode.com'
// Axios 로직을 인스턴스화 하는 코드
const APIInstance = (baseURL) => {
    const apiInstance = axios.create({
        timeout: 8000,
        baseURL: baseURL,
        params: {}
    });
    apiInstance.defaults.withCredentials = true;
    // 응답 인터셉터 추가
    apiInstance.interceptors.response.use(
        // 응답 데이터를 가공
        response => response,
        // 오류 응답을 처리
        error => console.log(error)
    );
    return apiInstance;
};

const PostInstance = APIInstance(BASE_URL);
const TmpInstance = APIInstance(POST_BASE_URL);
// const MemberInstance = APIInstance(BASE_URL);
// const SettingInstance = APIInstance(BASE_URL);
// const AuthInstance = APIInstance(BASE_URL);

export {PostInstance, TmpInstance};
