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
const Category = () => {
    return (
        <Main>
            <Seo title='카테고리'/>
            <h1>카테고리 화면 입니다</h1>
        </Main>
    );
}
export default Category;
