import styles from "../styles/Home.module.css";
import {NextPage} from "next";
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";

const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #0070f3;
  color: white;
  font-size: 20px;
`;

const Main = styled.div`
  background-color: antiquewhite;
  min-height: 100vh;
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPage: NextPage = () => {
    const router = useRouter();
    return (
            <Main>
                <Seo title='MyPage'/>
                <Button onClick={() => router.push('/')}>HOME 가기</Button>
                <h1>라우팅 확인용 mypage 입니다</h1>
                <h1>🌵🌵🌵</h1>
            </Main>
    );
};

export default MyPage;