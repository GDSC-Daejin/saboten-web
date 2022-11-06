import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";

//styled components 작동되나 확인용 임시코드
//추후 index.js에서 제거할 예정
const Button = styled.button`
  width: 250px;
  height: 80px;
  background-color: green;
  border-radius: 20px;
  border: none;
  color: white;
  font-size: 30px;
  margin-top: 100px;
`;

const MainLogo = styled.img`
  width: 250px;
`

const Home = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <Seo title='Home'/>
          <main className={styles.main}>
            <MainLogo src='/asset/image/main_logo.png' alt="선인장 메인로고"/>

            <Button onClick={() => router.push('mypage')}>마이페이지가기</Button>
          </main>
    </div>
  )
}

export default Home;
