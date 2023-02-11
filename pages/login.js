import Link from "next/link";
import {getAccessToken} from "./api/auth/[...nextauth]";
import {useState} from "react";
// import {signin} from "next-auth/core/routes";

const Login = () => {
    const [accessToken, setToken] = useState(null);
    const kakaoLoginHandler = () => {
        // signin("kakao");
        setToken(getAccessToken());
    }
    return (
        <div>
            {/*<img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg"*/}
            {/*     onClick={kakaoLoginHandler} width="222" alt="카카오 로그인 버튼"/>*/}

            <Link href={`https://kauth.kakao.com/oauth/authorize?client_id={넣어야함}&redirect_uri=http://localhost:3000/auth/kakao&response_type=code`}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                     alt="카카오 로그인 버튼" />
            </Link>
        </div>
    )
}
export default Login;
