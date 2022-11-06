import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";

const Button = styled.button`
  width: 250px;
  height: 80px;
  background-color: green;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 30px;
  margin-top: 30%;
`;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const MyPage = () => {
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
