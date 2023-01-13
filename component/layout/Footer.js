import styled from "styled-components";
import {useRouter} from "next/router";
import Link from "next/link";

const StyledNavbar = styled.div`
  box-shadow:0 -2px 5px var(--box-shadow);
  padding-bottom: 3%;
  position: fixed;
  bottom: 0;
  width: 100%;
  max-width: 768px;
  margin: 0 auto;
  height: 70px;
  border-radius: 30px 30px 0 0;
  z-index: 10;
  background-color: white;
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Icons = styled.img`
  width: 35px;
  cursor: pointer;
  padding-bottom: 100%;
  @media (max-width: 600px) {
    width: 30px;
  }
`;

const AddIcon = styled.img`
  width: 120px;
  position: relative;
  bottom: 70px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 90px;
    position: center;
    bottom: 35px;
  }
  
`

const Footer = () => {
    const router = useRouter();
    return (
        <StyledNavbar>
            <Buttons>
                <Link href={'/'}><Icons src="/asset/image/icons/Home.png" alt="홈화면"/></Link>
                <Link href={'/category'}><Icons src="/asset/image/icons/Dashboard.png" alt="카테고리"/></Link>
                {/*<AddIcon src="/asset/image/icons/Add.svg" alt="내부API테스트" onClick={useGetAllPosts} />*/}
                {/*<AddIcon src="/asset/image/icons/Add.svg" alt="외부API" onClick={useTmpPosts} />*/}
                <Link href={'/post'}><AddIcon src="/asset/image/icons/Add.svg" alt="글쓰기"/></Link>
                <Link href={'/noti'}><Icons src="/asset/image/icons/Notifications.png" alt="알람"/></Link>
                <Link href={'/mypage'}><Icons src="/asset/image/icons/Person.png" alt="마이페이지"/></Link>
            </Buttons>
        </StyledNavbar>
    )
}
export default Footer
