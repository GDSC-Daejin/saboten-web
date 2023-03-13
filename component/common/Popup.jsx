import {Flex, MainContainer} from "../../styles/styledComponentModule";
import styled from "styled-components";
import {useState} from "react";

const Popup = () => {
    const [category, setCategory] = useState(null);
    const [date, setDate] = useState(null);
    return (
        <Container>
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
`
const Inner = styled.div`
  overflow: auto;
`
const Button = styled.div`
  border-radius: 10px;
  border: 4px solid var(--saboten-gray-300);
  width: 300px;
  height: 100px;
  margin: 15px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 30px;
  color: var(--saboten-gray-300);
`
const ButtonFlex = styled(Flex)`
  justify-content: center
`
const SubmitButton = styled.button`
  background-color: var(--saboten-green-500);
  border: none;
  width: 100%;
  height: 80px;
  color: var(--saboten-white);
  font-size: 25px;
  position: fixed;
  bottom: 0;
  max-width: 768px;
`
