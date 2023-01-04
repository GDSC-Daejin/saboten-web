import Seo from "../component/common/Seo";
import styled from "styled-components";
import QuestionList from "../component/Question/QuestionList";
import {Flex, MainSize} from "../styles/styledComponentModule";

const Category = () => {
    const newQuestion = [{title: "😊당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString(), mark:true},
        {title: "🌵둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:false},
        {title: "👍👍둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true},
        {title: "❄️당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString(), mark:false},
        {title: "😂둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true},
        {title: "🎁둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString(), mark:true}];
    return (
        <MainContainer>
            <Seo title='카테고리'/>
            <Main>
            <CategoryList>
                <Filter>최신순 |</Filter>
                <Img src="/asset/image/categotytmp/2.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/1.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
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
  padding: 0 10px;
  margin: 20px auto;
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
const Filter = styled.button`
  margin: 5px auto;
  cursor: pointer;
  height: 30px;
  white-space:nowrap;
  border: none;
  font-size: 20px;
  font-weight: bold;
  color: var(--saboten-gray-700);
`
