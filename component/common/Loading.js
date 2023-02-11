import styled from "styled-components";
export const Loading = (props) => {
    return (
        <Background>
            <div>
                {/*<img src='/asset/image/icons/loading.gif' alt="로딩중"/>*/}
                <img src='/asset/image/icons/newLoading.png' alt="로딩중"/>
                <LoadingText>{props.title}</LoadingText>
                <LoadingMsg>{props.msg}</LoadingMsg>
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
  font-size: 20px;
  //@media (max-width: 600px) {
  //  font-size: 15px;
  //}
`
const LoadingMsg = styled.p`
  display:flex;
  justify-content:center;
  align-items:center;
  color: val(--saboten-gray-500);
  font-size: 14px;
`
