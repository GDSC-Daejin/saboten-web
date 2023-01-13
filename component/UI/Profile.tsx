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
const Profile = ({author, date}) => {
    const ImgURL = "/asset/image/tmp/want.jpg";
    // const ImgURL = author.profilePhotoUrl;
    let now = elapsedTime(date);
    return (
        <div>
            <Container>
                <ProfileImg src={ImgURL}/>
                <InnerContainer>
                    <Text>{author.nickname}</Text>
                    <Text time={true}>{now}</Text>
                </InnerContainer>
            </Container>
        </div>
    )
}
export default Profile

function elapsedTime(date) {
    const start = new Date(date);
    const end = new Date();

    // @ts-ignore
    const diff = (end - start) / 1000;

    const formatter = new Intl.RelativeTimeFormat('ko', {
        numeric: 'auto',
    });

    const times = [
        { name: '년', milliSeconds: 60 * 60 * 24 * 365 },
        { name: '개월', milliSeconds: 60 * 60 * 24 * 30 },
        { name: '일', milliSeconds: 60 * 60 * 24 },
        { name: '시간', milliSeconds: 60 * 60 },
        { name: '분', milliSeconds: 60 },
    ];

    for (const value of times) {
        const betweenTime = Math.floor(diff / value.milliSeconds);

        if (betweenTime > 0) {
            return `${betweenTime}${value.name} 전`;
        }
    }
    return '방금 전';
}

