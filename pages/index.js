import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";
import PostList from "../component/Post/PostList";
import {MainSize} from "../styles/styledComponentModule";

const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
`
const Container = styled.div`
  overflow: auto;
  width: auto;
  padding: 0;
  &::-webkit-scrollbar {
    display: none;
  }
`
const InnerContainer = styled.div`
  padding: 10px;
`
const Banner = styled.img`
  width: 100%;
  @media (max-width: 600px) {
    width: 100vw;
  }
  display: inline;
`
const Home = (props) => {
  const router = useRouter();
  const bannerLink = '/asset/image/banner/banner1.png'
    const newPosts = [{title: "😊당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString()},
                    {title: "🌵둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
                    {title: "👍👍둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
                    {title: "❄️당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString()},
                    {title: "😂둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
                    {title: "🎁둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()}];

  return (
    <>
        <Seo title='Home'/>
              <Main>
                  <Container>
                      <Banner src={bannerLink}/>
                      <InnerContainer>
                          <PostList onPosts={newPosts}></PostList>
                      </InnerContainer>
                  </Container>
              </Main>
    </>
  )
}

export default Home;

export const getServerSideProps = async () => {
    const res = await fetch("http://localhost:3000/api/hello");
    // const data = await res.json();
    const data = {name:"want"}

    if (!data) {
        return {
            notFound: true,
        };
    }
    return {
        props: data,
    };
};
