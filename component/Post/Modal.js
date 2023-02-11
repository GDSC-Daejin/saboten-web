import styled from "styled-components";
import {useRecoilState} from "recoil";
import {useRouter} from "next/router";
import {postModalState} from "../../service/atom/common";

const Modal = () => {
    const router = useRouter();
    const [modal, setModal] = useRecoilState(postModalState);
    const ModalHandler = () => setModal(false);
    const ModalCloseHandler = () => {
        setModal(!modal);
        router.back();
    }
    return (
        <>
        {modal===false ? null:
            (<Container>
                <Info>
                    <Title>잠깐! 작성을 취소하시겠어요?</Title>
                    <Text>선인장은 작성 중인 내용이 저장되지 않아요.</Text>
                    <ButtonLayout>
                        <BtnYes onClick={ModalHandler}>계속 작성</BtnYes>
                        <BtnNo onClick={ModalCloseHandler}>작성 취소</BtnNo>
                    </ButtonLayout>
                </Info>
            </Container>)
        }
        </>
    )
}
export default Modal

const Container = styled.div`
  background-color: rgba(0,0,0,0.5);
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 200;
  display: flex;
`
const Info = styled.div`
  background-color: var(--saboten-white);  
  padding: 15px 20px 15px 20px ;
  border-radius: 10px;
  width: 320px;
  margin: auto;
`
const Title = styled.h2`
    font-size: 16px;
`
const Text = styled.p`
  font-size: 12px;
  color: var(--saboten-gray-700);
`
const Btn = styled.button`
  font-size: 14px;
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-top: 15px;
`
const BtnYes = styled(Btn)`
  color: var(--saboten-gray-600);
`
const BtnNo = styled(Btn)`
  color: var(--saboten-green-500);
`
const ButtonLayout = styled.div`
  text-align: right;    
`
