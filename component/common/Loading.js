import styled from "styled-components";
export const Loading = (props) => {
    return (
        <Background>
            <div>
                <LoadingText>{props.msg}</LoadingText>
                {/*<img src='/asset/image/icons/sabo.png' alt="로딩중"/>*/}
                <img src='/asset/image/icons/loading.gif' alt="로딩중"/>
            </div>
        </Background>
    );
};
const Background = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  text-align: center;
  background-color: white;
`
const LoadingText = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  font-weight: bold;
  color: val(--saboten-gray-700);
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 15px;
  }
`
