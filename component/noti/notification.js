import {Flex} from "../../styles/styledComponentModule";
import styled from "styled-components";

const Notification = () => {
    const ImgURL = "/asset/image/tmp/want.jpg";
    return (
        <Main>
            {/*<Hr/>*/}
            <Container>
                <ProfileImg src={ImgURL}/>
                <Text><b>고구마치즈동까스</b>님이 회원님의 게시물을스크랩 했습니다.</Text>
                <TagImg src="/asset/image/icons/bookmark_green.svg" alt="none_Bookmark"/>
            </Container>
        </Main>
    )
}
export default Notification

const Main = styled.div`
  width: 100%;
  justify-content: space-around;
  margin-top: 12px;
`
const Container = styled(Flex)`
  align-items: center;
  width: 100%;
`
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin: 5px 15px;
`
const TagImg = styled.img`
  margin: 10px 15px 10px 10px ;   
  width: 26px;
`
const Text = styled.p`
  font-size: 17px;
  padding: 0 10px 0 5px;
  @media (max-width: 600px) {
    font-size: 14px;
  }
`
const TextSM = styled(Text)`
  color: var(--saboten-gray-500);
  font-size: 13px;
`
const Hr = styled.hr`
  color: var(--saboten-gray-100);
  border-color: var(--saboten-gray-100);
  background-color: var(--saboten-gray-100);
`
