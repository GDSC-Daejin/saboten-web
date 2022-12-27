import styled from "styled-components";

export const MainContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const MainSize = styled.div`
  height: 80vh;
  //@media (max-width: 850px) {
  //  height: 65vh;
  //}
  //@media (max-width: 450px) {
  //  height: 75vh;
  //}
  //@media (max-width: 400px) {
  //  height: 83vh;
  //}
`

export const Flex = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const CenteredFlex = styled(Flex)`
  justify-content: center;
`;

export const Button = styled.button`
    border-radius: 5px;
    border: none;
    margin-bottom: 10px;
    font-size: 30px;
    cursor: pointer;
    
    &:active{
      background-color: #8D362D;
    }
`;

