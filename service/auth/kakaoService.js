import {authApi} from "../apiClient";


const getKakaoLogin= (code, state) => {
    const link = `${baseUrl}/oauth/callback/kakao?code=${code}&state=${state}`
    return authApi.get<any>(link)
}
//엑세스토큰 받아오는 url
export async function KakaoLogin(code, state) {
    try {
        // console.log("쿠키굽기 #################");
        // // console.log(res);
        // await setCookie("token", res.data.data.token, 30);
        // await setCookie('subToken', res.data.data.refreshToken,30);
        return await getKakaoLogin(code, state);
    } catch (e) {
        return e;
    }
}
