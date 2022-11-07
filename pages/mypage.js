import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";


const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 600px) {
    height: 87vh;
  }
`;

const MainLogo = styled.img`
  margin-top: 10%;
  width: 250px;
`
const MyPage = () => {
    const router = useRouter();
    return (
            <Main>
                <Seo title='MyPage'/>
                <MainLogo src='/asset/image/main_logo.png' alt="선인장 메인로고"/>
                <h1>mypage 입니다</h1>
            </Main>
    );
};

export default MyPage;
