import Seo from "../component/common/Seo";
import styled from "styled-components";
import PostList from "../component/Post/PostList";
import {MainSize} from "../styles/styledComponentModule";
import {Flex} from "../styles/styledComponentModule";
import CategorySlider from "../component/page/index/CategorySlider";
import {useEffect, useState} from "react";
import {api} from "../service/apiClient";
import HomeFilter from "../component/home/HomeFilter";
import {usePost} from "../service/post/hooks/usePost";

const Home = (props) => {
    const [newPosts,setPost]=useState(props.newPosts.content);
    // const [newPosts,setPost]=useState();
    const myPosts = usePost();
    useEffect(()=>{
        async function setting(){
            await setPost(myPosts.data.content);
        }
        setting();
    },[myPosts])
    if(!myPosts) return <h1>로딩 중..</h1>
    if(!newPosts) return <h1>로딩 중 입니다.</h1>


    return (
    <>
        <Seo title='Home'/>
              <Main>
                  <Banner src={props.bannerLink}/>
                  <Container>
                      <InnerContainer>
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
                          <HomeFilter/>
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

export const getStaticProps = async (context) => {
    const bannerLink = '/asset/image/banner/banner1.png'
    const res = await api.get('/post');
    const myPost = await res;
    const data = {
        name:"dl",
        bannerLink : bannerLink.toString(),
        newPosts : myPost.data
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
