import styled from "styled-components";
import {useRouter} from "next/router";
import {useGetAllPosts, useTmpPosts} from "../../api/hooks/useGetAllPosts";

const StyledNavbar = styled.div`
  box-shadow:0 -2px 5px var(--box-shadow);
  padding-bottom: 3%;
  width: 100%;
  height: 80px;
  border-radius: 30px 30px 0 0;
  z-index: 10;
  @media (max-width: 600px) {
    height:70px;
  }
`

const Buttons = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`
const Icons = styled.img`
  width: 35px;
  cursor: pointer;
  padding-bottom: 5%;
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
                <Icons src="/asset/image/icons/Home.png" alt="홈화면" onClick={() => router.push('/')} />
                <Icons src="/asset/image/icons/Dashboard.png" alt="카테고리" onClick={() => router.push('category')} />
                {/*<AddIcon src="/asset/image/icons/Add.svg" alt="내부API테스트" onClick={useGetAllPosts} />*/}
                {/*<AddIcon src="/asset/image/icons/Add.svg" alt="외부API" onClick={useTmpPosts} />*/}
                <AddIcon src="/asset/image/icons/Add.svg" alt="글쓰기" onClick={() => router.push('post')} />
                <Icons src="/asset/image/icons/Notifications.png" alt="알람" onClick={() => router.push('noti')} />
                <Icons src="/asset/image/icons/Person.png" alt="마이페이지" onClick={() => router.push('mypage')} />
            </Buttons>
        </StyledNavbar>
    )
}
export default Footer
