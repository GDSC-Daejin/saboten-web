import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";
import PostList from "../component/Post/PostList";

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  height: 80vh;
  @media (max-width: 600px) {
    height: 87vh;
  }
`

const Home = () => {
  const router = useRouter();
    const newPosts = [{title: "당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString()},
    {title: "둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()}];

  return (
    <div>
        <Seo title='Home'/>
              <Main>
                <PostList onPosts={newPosts}></PostList>
              </Main>
    </div>
  )
}

export default Home;
