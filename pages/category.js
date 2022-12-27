import Seo from "../component/common/Seo";
import styled from "styled-components";
import QuestionList from "../component/Question/QuestionList";
import {Flex, MainSize} from "../styles/styledComponentModule";

const Main = styled(MainSize)`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  overflow-y: auto;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Container = styled.div`
  overflow: auto;
  padding: 10px;
  &::-webkit-scrollbar {
    display: none;
  }
`
const CategoryList = styled(Flex)`
  //overflow: auto;
  //width: 100%;
  //margin: 0 5px 15px 5px;
`;
const Img = styled.img`
  margin: 10px;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
`


const Category = () => {
    const newQuestion = [{title: "😊당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString()},
        {title: "🌵둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
        {title: "👍👍둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
        {title: "❄️당신은 고친놈인가 감친놈인가?", a: "평생 고구마만 먹기", b: "평생 감자만 먹기", id:Math.random().toString()},
        {title: "😂둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()},
        {title: "🎁둘 중 하나만 골라봐", a: "붕어빵에 붕어 넣어먹기", b: "거북알에 거북알 넣어먹기", id:Math.random().toString()}];
    return (
        <Main>
            <Seo title='카테고리'/>
            <CategoryList>
                <Img src="/asset/image/categotytmp/1.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/2.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
            </CategoryList>
            <Container>
                <QuestionList onQuestions={newQuestion}></QuestionList>
            </Container>
        </Main>
    );
}
export default Category;
