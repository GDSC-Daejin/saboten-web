import Seo from "../component/common/Seo";
import styled from "styled-components";
const Main = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 80vh;
  @media (max-width: 600px) {
    height: 87vh;
  }
`;
const Post = () => {
    return (
        <Main>
            <Seo title='Post'/>
            <h1>글쓰기화면 입니다</h1>
        </Main>
    );
};
export default Post;
