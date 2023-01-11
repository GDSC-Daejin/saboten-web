import Seo from "../component/common/Seo";
import styled from "styled-components";
import Link from "next/link";
import {MainSize} from "../styles/styledComponentModule";
const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const Noti = () => {
    return (
        <Main>
            <Seo title='Post'/>
            <h1>알림화면입니다</h1>
            <p>이 알림 모양 탭은 어떤 기능을 하는 화면인가요?</p>
            <Link href={`https://kauth.kakao.com/oauth/authorize?client_id={넣어야함}&redirect_uri={넣어야함}/login/oauth2/code/kakao&response_type=code`}>
                <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222"
                     alt="카카오 로그인 버튼" />
            </Link>
        </Main>
    );
};
export default Noti;
