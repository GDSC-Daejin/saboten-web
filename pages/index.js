import Seo from "../component/common/Seo";
import styled from "styled-components";
import PostList from "../component/Post/PostList";
import {MainSize} from "../styles/styledComponentModule";
import {Flex} from "../styles/styledComponentModule";
import CategorySlider from "../component/page/index/CategorySlider";
import {api} from "../service/apiClient";
import {usePost} from "../service/post/hooks/usePost";
import {Loading} from "../component/common/Loading";
import {useEffect} from "react";

const Home = (props) => {
    const myPosts = usePost();
    useEffect(()=>{
        window.addEventListener('scroll', ()=>{
            const scrollable = document.documentElement.scrollWidth - window.innerWidth;
            const scrolled = window.scrollY;
            console.log(scrollable)
        })
    })
    if(!myPosts.data) return <Loading msg="고민거리를 찾아오고 있어요"/>
    // const [newPosts,setPost]=useState(props.newPosts);
    // if(!newPosts.data) return <h1>로딩 중 입니다.</h1>
    return (
    <>
        <Seo title='Home'/>
              <Main>
                  <Banner src={props.bannerLink}/>
                  <Container>
                      <InnerContainer>
                          <h3>오늘의 HOT</h3>
                          <PostList onPosts={myPosts.data?.content} />
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
                          <PostList onPosts={myPosts.data?.content} />
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>내가 선택했던 글</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <PostList onPosts={myPosts.data?.content} />
                      </InnerContainer>
                      <InnerContainer>
                          <Flex>
                              <h3>내가 스크랩 한 글</h3>
                              <More>{`더보기 >`}</More>
                          </Flex>
                          <PostList onPosts={myPosts.data?.content} />
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
    const myPost = await res.data;
    const data = {
        name:"dl",
        bannerLink : bannerLink.toString(),
        newPosts : myPost
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
