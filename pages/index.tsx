import styles from '../styles/Home.module.css'
import Seo from "../component/common/Seo";
import styled from "styled-components";
import {NextPage} from "next";
import {useRouter} from "next/router";

//styled components 작동되나 확인용 임시코드
//추후 index.js에서 제거할 예정
const Button = styled.button`
  width: 300px;
  height: 50px;
  background-color: #0070f3;
  color: white;
  font-size: 20px;
`;


const Home: NextPage = () => {
  const router = useRouter();
  return (
    <div className={styles.container}>
        <Seo title='Home'/>
          <main className={styles.main}>
            <h1 className={styles.title}>
              Welcome to <a href="https://nextjs.org">선인장</a>
            </h1>
            <p className={styles.description}>
              <b>선인장 대수술 중🌵<br/></b>
              NextJs 집으로 이사왔어요<br/>
              안드디자인으로 ▶ 모바일 웹도 제작하기로 수정<br/>
              <b>클라이언트 진도 빼자~~</b>
            </p>
            <Button onClick={() => router.push('mypage')}>마이페이지가기</Button>
          </main>
    </div>
  )
}

export default Home;
