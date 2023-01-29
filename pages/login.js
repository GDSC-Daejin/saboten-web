import Link from "next/link";

const Login = () => {
    return (
        <div>
            <Link href={`https://kauth.kakao.com/oauth/authorize?client_id={넣어야함}&redirect_uri={넣어야함}/login/oauth2/code/kakao&response_type=code`}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                     alt="카카오 로그인 버튼" />
            </Link>
        </div>
    )
}
export default Login;
