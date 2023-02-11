import {NextPage} from "next";
import {useEffect, useState} from "react";
import {useRouter} from "next/router";

const Kakao : NextPage = () => {
    const router = useRouter();
    const [refreshToken, setRefresh] = useState("");
    const [isLogin, setIsLogin] = useState(false);

    //로그인하는 함수(인가코드 받아와 백엔드에서 두 Token을 받아옴)
    const run = async () => {
        try {
            let CODE = String.raw`${new URL(window.location.href).searchParams.get("code")}`;
            let STATUS = String.raw`${new URL(window.location.href).searchParams.get("state")}`;

            if(CODE.slice(-1,CODE.length)===`=`) CODE=CODE.replace(/.$/,'%3D')
            if(STATUS.slice(-1,CODE.length)===`=`) STATUS=STATUS.replace(/.$/,'%3D')

            const res = await KakaoLogin(CODE, STATUS);
            // await setCookie("token", res.data.data.token, 30);
            // await setCookie('subToken', res.data.data.refreshToken,30);

            // setRefresh(res.data.data.refreshToken);
            // setIsLogin(true);

            // getUserData
            router.reload()

            // const loggedMember = await getLoggedMember();
            // await setCookie('invitationLink', loggedMember.invitationLink, 30);
            // console.log(">>>>>>>>>>loggedMember.invitationLink")
            // console.log(loggedMember)
            // console.log(loggedMember.invitationLink)

            // return loggedMember;
        }catch (error){
            alert('로그인이 필요한 기능입니다🎁');
            // alert('로그인이 불가한 접근시도입니다.😥');
            router.push('/login');
        }
    }

    useEffect(()=> {
        run();
        router.push('/');
    },[])

    //refreshToken Context API에 저장
    // updateRefreshToken(refreshToken);

    return (
        <></>
    )

}
export default Kakao
