import {Flex, MainContainer} from "../../styles/styledComponentModule";
import styled from "styled-components";
import {useState} from "react";

const Popup = (props) => {
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(null);
    return (
        <>
        {props.view === false ? <></> :
                <Container>
                    <TitleFlex>
                        <Title>뜨거웠던 고민거리 찾기</Title>
                        <ClearButton src='/asset/image/icons/Clear.png'/>
                    </TitleFlex>
                    <ButtonFlex>
                        <Inner>
                            <Button>전체</Button>
                            <Button>연애</Button>
                            <Button>일/취업</Button>
                            <Button>연애</Button>
                            <Button>연애</Button>
                            <Button>연애</Button>
                            <Button>연애</Button>
                        </Inner>
                        <div>
                            <Button>하루동안</Button>
                            <Button>일주일간</Button>
                            <Button>한달간</Button>
                            <Button>모든 기간</Button>
                        </div>
                    </ButtonFlex>
                    <SubmitButton>적용하기</SubmitButton>
                </Container>
        }
        </>
    )
}
export default Popup

const Container = styled.div`
  background-color: white;
  width: 100%;
  height: 60%;
  position: fixed;
  bottom: 50px;
  padding-bottom: 50px;
  max-width: 768px;
  z-index: 20;
  border-radius: 30px 30px 0 0;
  @media (max-width: 600px) {
    border-radius: 15px 15px 0 0;
  }
`
const Inner = styled.div`
  overflow: auto;
`
const Title = styled.h2`
  font-size: 30px;
  @media (max-width: 600px) {
    font-size: 18px;
  }
`
const ClearButton = styled.img`
  width: 45px;
  height: 45px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 30px;
    height: 30px;
  }
`
const Button = styled.div`
  border-radius: 10px;
  border: 4px solid var(--saboten-gray-300);
  width: 300px;
  height: 100px;
  text-align: center;
  margin: 15px 0 15px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: var(--saboten-gray-300);
  @media (max-width: 600px) {
    border: 2px solid var(--saboten-gray-300);
    width: 150px;
    height: 50px;
    font-size: 15px;
  }
`
const ButtonFlex = styled(Flex)`
  justify-content: space-between;
  padding: 0 5% 0 5%;
`
const TitleFlex = styled(Flex)`
  justify-content: space-between;
  align-items: center;
  padding: 0 5% 0 5%;
`
const SubmitButton = styled.button`
  background-color: var(--saboten-green-500);
  border: none;
  width: 100%;
  height: 80px;
  color: var(--saboten-white);
  font-size: 30px;
  font-weight: bold;
  position: fixed;
  bottom: 0;
  max-width: 768px;
  @media (max-width: 600px) {
    font-size: 25px;
  }
`
