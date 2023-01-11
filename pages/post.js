import Seo from "../component/common/Seo";
import styled from "styled-components";
import Card from "../component/UI/Card";
import GrayCard from "../component/UI/GrayCard";
import {Flex, MainContainer} from "../styles/styledComponentModule";
import Profile from "../component/UI/Profile";
import CircleIcon from "../component/UI/CircleIcon";
import {useRef} from "react";

const Post = () => {
    const ref = useRef(null);
    return (
        <Main>
            <Seo title='Post'/>
            <Container>
                <Text>카테고리를 선택하세요</Text>
                <Category>
                    <Img src="/asset/image/categotytmp/1.png"  alt={"카테고리"}/>
                    <Img src="/asset/image/categotytmp/2.png"  alt={"카테고리"}/>
                    <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                    <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
                    <Img src="/asset/image/categotytmp/3.png"  alt={"카테고리"}/>
                    <Img src="/asset/image/categotytmp/4.png"  alt={"카테고리"}/>
                </Category>
                <Card>
                    <Profile/>
                    <Text>고민 중인 이야기를 적어보세요</Text>
                    <GrayCard>
                        <CircleIcon text="A"/>
                        <Text>A 선택지를 입력하세요</Text>
                        {/*<textarea className="textarea" ref={ref} id="message" name="message" />*/}
                    </GrayCard>
                    <GrayCard>
                        <CircleIcon text="B"/>
                        <Text>B 선택지를 입력하세요</Text>
                    </GrayCard>
                </Card>
            </Container>
        </Main>
    );
};
export default Post;

const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  overflow: auto;
`;
const Container = styled(MainContainer)`
  width: 90%;
  margin-top: 50px;
  padding-bottom: 30px;
`;
const Text = styled.p`
  font-size: 17px;
  color: var(--saboten-gray-500);
`;
const Category = styled(Flex)`
  overflow: auto;
  width: 100%;
  margin: 0 5px;
`;
const Img = styled.img`
  margin: 10px 20px;
  cursor: pointer;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 600px) {
    margin: 5px 5px;
  }
`;
