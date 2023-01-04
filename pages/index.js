import Seo from "../component/common/Seo";
import styled from "styled-components";
import PostList from "../component/Post/PostList";
import {MainSize} from "../styles/styledComponentModule";
import {Flex} from "../styles/styledComponentModule";
import CategorySlider from "../component/page/index/CategorySlider";
import {useState} from "react";

const Home = (props) => {
    const [newPosts,setPost]=useState(props.newPosts);
    if(!newPosts) return <h1>새로고침을 해주세요</h1>
  return (
    <>
        <Seo title='Home'/>
              <Main>
                  <Banner src={props.bannerLink}/>
                  <Container>
                      <InnerContainer>
                          <h3>{props.name}</h3>
                          <h3>오늘의 HOT</h3>
                          <PostList onPosts={newPosts}></PostList>
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>실시간 인기 카테고리</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <CategorySlider/>
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>뜨거웠던 고민거리</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <Button><span>연애</span> 중에서 <span>일주일 간</span> ∨</Button>
                          <PostList onPosts={newPosts}></PostList>
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>내가 선택했던 글</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <PostList onPosts={newPosts}></PostList>
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>내가 스크랩 한 글</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <PostList onPosts={newPosts}></PostList>
                      </InnerContainer>
                  </Container>
              </Main>
    </>
  )

}
export default Home;

export const getServerSideProps = async(context) => {
    // const res = await fetch("http://localhost:3000/api/hello");
    // const data = await res.json();
    const bannerLink = '/asset/image/banner/banner1.png'
    const data = {
        name:"dl",
        bannerLink : '/asset/image/banner/banner1.png',
        newPosts : [
            // {title: "😊당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString(), mark:false},
            // {title: "🌵둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true},
            // {title: "👍👍둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기, 붕어빵에 연어도 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:false},
            // {title: "❄️당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString(), mark:true},
            // {title: "😂둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true},
            {title: "🎁둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true}]
    }
    return {
        props: data
    };
}

const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 0 auto;
  align-items: center;
  width: 100%;
  //height: 80vh;
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
  margin-top: -100px;
  @media (max-width: 600px) {
    width: 100vw;
    margin-top: 0;
  }
`
const More = styled.h5`
  color: var(--saboten-gray-500);
`
const Button = styled.button`
  border-radius: 5px;
  border: solid 2px var(--saboten-green-500);
  color: var(--saboten-green-500);
  background-color: transparent;
  font-size: 15px;
  && span{
    font-weight: bold;
  }
`
