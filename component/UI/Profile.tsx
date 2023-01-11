import styled, {css} from "styled-components";
import { Flex } from "../../styles/styledComponentModule";

const Container = styled(Flex)`
  align-items: center;
  justify-content: left;
  text-align: left;
`
const InnerContainer = styled.div`
  padding: 0 0 0 10px;
`
const ProfileImg = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
`
const Text = styled.p`
  font-size: 17px;
  margin: 5px;
  ${props =>
          props.time && 
          css`
            color: var(--saboten-gray-500);
            font-size: 13px;
    `}
`
const Profile = () => {
    const ImgURL = "/asset/image/tmp/want.jpg";
    return (
        <div>
            <Container>
                <ProfileImg src={ImgURL}/>
                <InnerContainer>
                    <Text>고구마치즈동까스</Text>
                    <Text time={true}>49분전</Text>
                </InnerContainer>
            </Container>
        </div>
    )
}
export default Profile
