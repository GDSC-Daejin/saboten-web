import Seo from "../component/common/Seo";
import styled from "styled-components";
import QuestionList from "../component/Question/QuestionList";
import {Flex, MainSize} from "../styles/styledComponentModule";
import CategoryFilter from "../component/category/CategoryFilter";
import {useCategory} from "../service/category/hook/useCategory";
import {useCategoryPost} from "../service/post/hooks/usePost";
import {useEffect, useState} from "react";


const Category = () => {
    const [newQuestion, setQuestion] = useState();
    const [filter, setFilter] = useState(1);
    const categoryies = useCategory();
    const categoryPost = useCategoryPost(2);

    useEffect(()=>{
        setting();
        async function setting(){
            await setQuestion(categoryPost.data.content);
        }
    },[categoryPost])
    if(!categoryPost)return <h1>로딩 중..</h1>
    if(!newQuestion) return <h1>로딩 중..</h1>
    return (
        <MainContainer>
            <Seo title='카테고리'/>
            <Main>
            <CategoryList>
                <CategoryFilter/>
                <CategoryBtn>{categoryies.data[0].name}</CategoryBtn>
                <CurrCategoryBtn>{categoryies.data[1].name}</CurrCategoryBtn>
                <CurrCategoryBtn>{categoryies.data[2].name}</CurrCategoryBtn>
                <CurrCategoryBtn>{categoryies.data[3].name}</CurrCategoryBtn>
                <CurrCategoryBtn>{categoryies.data[4].name}</CurrCategoryBtn>
                <CurrCategoryBtn>{categoryies.data[5].name}</CurrCategoryBtn>
            </CategoryList>
            </Main>
            <Container>
                <QuestionList onQuestions={newQuestion}></QuestionList>
            </Container>
        </MainContainer>
    );
}
export default Category;

const MainContainer = styled(MainSize)`
  height: 100%;
  padding: 0 40px;
  margin: 20px auto;
  @media (max-width: 600px) {
    padding: 0 10px;
  }
`
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  width: 100%;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  padding: 15px;
  overflow: auto;
  height: 90%;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CategoryList = styled(Flex)`
  overflow: auto;
  width: 100%;
`;
const Img = styled.img`
  margin: 5px;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CategoryBtn = styled.button`
  background-color: var(--saboten-green-500);
  width: 66px;
  height: 30px;
  color: var(--saboten-white);
  font-weight: bold;
  border-radius: 30px;
  border: none;
`
const CurrCategoryBtn = styled(CategoryBtn)`
  background-color: transparent;
  color: var(--saboten-gray-600);
  border: 1px solid var(--saboten-gray-600);
  font-weight: normal;
  &:active{
    background-color: var(--saboten-gray-300);
    color: black;
  }
`
