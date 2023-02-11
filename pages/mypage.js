import Seo from "../component/common/Seo";
import styled from "styled-components";
import {useRouter} from "next/router";
import {MainSize} from "../styles/styledComponentModule";
import {Flex} from "../styles/styledComponentModule";
import PostList from "../component/Post/PostList";
import {usePost} from "../service/post/hooks/usePost";
import {useCategory} from "../service/category/hook/useCategory";
import {useState} from "react";
const MyPage = () => {
    const router = useRouter();
    const ImgURL = "/asset/image/tmp/want.jpg";
    const myPosts = usePost(); //이거말고 마이페이지 데이터불러오기
    const [filter, setFilter] = useState(null);
    const categoryies = useCategory();
    const categoryHandler = (i) => {
        setFilter(i);
    }
    return (
            <Main>
                <Seo title='MyPage'/>
                <Container>
                    <Flex>
                        <ProfileImg src={ImgURL}/>
                        <Box>
                            <Text size="18px" bold='bold'>{`27`}</Text>
                            <Text  size="12px" color="var(--saboten-gray-500)">{`게시물`}</Text>
                        </Box>
                        <Box>
                            <Text size="18px" bold='bold'>{`18`}</Text>
                            <Text  size="12px" color="var(--saboten-gray-500)">{`선택`}</Text>
                        </Box>
                        <Box>
                            <Text size="18px" bold='bold'>{`32`}</Text>
                            <Text  size="12px" color="var(--saboten-gray-500)">{`스크랩`}</Text>
                        </Box>
                    </Flex>
                    <IntroduceText>뭐요, 말하는 강아지 처음 보나요</IntroduceText>
                </Container>
                <Inner>
                    <FilterBtn>내가 쓴 글</FilterBtn>
                    <Category>
                        {categoryies.data?.map((category, i)=>{
                            return filter===i ? <CurrCategoryBtn>{category.name}</CurrCategoryBtn>
                                :  <CategoryBtn onClick={()=>categoryHandler(i)}>{category.name}</CategoryBtn>
                        })}
                    </Category>
                </Inner>
                <PostList onPosts={myPosts.data?.content} />
                {/*<FilterPopUp>*/}
                {/*    필터팝업*/}
                {/*</FilterPopUp>*/}
            </Main>
    );
};
export default MyPage;
const FilterPopUp = styled.div`
  border: 1px solid black;
  height: 500px;
  border-radius: 30px 30px 0 0;
  width: 50%;
  background-color: var(--saboten-white);
  position: fixed;
  bottom: 0;
  z-index: 100;
  text-align: center;
`
const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Container = styled.div`
  margin: 30px 20px;
  width: 100%;
  padding: 0 100px;
  border-bottom: 2px solid var(--saboten-gray-200);
  @media (max-width: 600px) {
    margin: 20px;
    padding: 0 20px;
  }
`
const Inner = styled(Flex)`
  overflow: auto;
  width: 90%;
`
const Box = styled.div`
  text-align: center;
`
const ProfileImg = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`
const Text = styled.p`
  font-size: ${props => props.size};
  color : ${props => props.color || undefined};
  margin: 5px;
  font-weight: ${props => props.bold || undefined};;
`
const IntroduceText = styled.p`
  margin-top: 25px;
  color: var(--saboten-gray-700);
`
const FilterBtn = styled.button`
  white-space:nowrap;
  background-color: transparent;
  border: none;
  border-right: 2px solid var(--saboten-gray-500);
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  &:active{
    background-color: var(--saboten-green-500);
    color: var(--saboten-white);
    border-radius: 10px;
  }
`
const Category = styled(Flex)`
  overflow: auto;
  width: 100%;
  margin: 0 5px;
`;
const CurrCategoryBtn = styled.button`
  background-color: var(--saboten-green-500);
  width: 74px;
  height: 30px;
  color: var(--saboten-white);
  font-weight: bold;
  border-radius: 30px;
  border: none;
  cursor: pointer;
  white-space : nowrap;
  margin: 0 5px;
  padding: 0 10px;
`
const CategoryBtn = styled(CurrCategoryBtn)`
  background-color: transparent;
  color: var(--saboten-gray-600);
  border: 1px solid var(--saboten-gray-600);
  font-weight: normal;
  &:active{
    background-color: var(--saboten-gray-300);
    color: black;
  }
`
