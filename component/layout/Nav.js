import styled from 'styled-components'
import { useRouter } from "next/router";
import {useRecoilState} from "recoil";
import {postModalState} from "../../service/atom/common";

const Nav = () => {
    const router = useRouter();
    const currPath = router.pathname.slice(1);
    const [modal, setModal] = useRecoilState(postModalState);
    const ModalHandler = () => setModal(true);
    return (
        <>
            {currPath === "" ? (
                <InnerNavUp>
                    <TextLogo src="/asset/image/icons/text_white_logo.svg" alt="로고"/>
                    <SearchLogo src="/asset/image/icons/search_white.svg" alt="로고"/>
                </InnerNavUp>
            ) : currPath === "mypage"? (
                <StyledNav>
                    <MypageNav>
                        {/*<Icon src="/asset/image/icons/ArrowBack.png" onClick={() => router.back()} alt="뒤로가기"/>*/}
                        <Text>내 프로필</Text>
                        <GrayIcon src="/asset/image/icons/Settings.png" onClick={() => alert("준비중인 기능입니다")}alt="설정"/>
                    </MypageNav>
                </StyledNav>
                ) : currPath === "post"? (
                    <StyledNav>
                        <MypageNav>
                            <Icon src="/asset/image/icons/Clear.png" onClick={ModalHandler} alt="뒤로가기"/>
                            <TextPost>글 올리기</TextPost>
                        </MypageNav>
                    </StyledNav>
                ) :
                <StyledNav>
                    <InnerNav>
                        <TextLogo src="/asset/image/icons/text_logo.png" alt="아이콘로고"/>
                        <SearchLogo src="/asset/image/icons/search.png" alt="로고"/>
                    </InnerNav>
                </StyledNav>
            }
        </>
    );
}
export default Nav

const StyledNav = styled.div`
  padding-bottom: 10px;
  position: fixed;
  top: 0;
  margin: 0 auto;
`
const InnerNav = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  box-shadow:0 2px 5px var(--box-shadow);
  background-color: var(--saboten-white);
  justify-content: space-between;
  align-items: center;
  padding: 5px 5px 10px 5px;
  width: 100%;
  max-width: 768px;
  @media (max-width: 600px) {
    //height: 35px;
  }
`
const InnerNavUp = styled(InnerNav)`
  position: fixed;
  top: 0;
  display: flex;
  box-shadow: none;
  background-color: transparent;
  justify-content: space-between;
  width: 100%;
  max-width: 768px;
  z-index: 10;
`
const MypageNav = styled(InnerNav)`
  height: 60px;
  padding-left: 20px;
`
const TextLogo = styled.img`
  position: relative;
  width: 120px;
  margin-left: 20px;
  margin-top: 10px;
  z-index: 100;
  @media (max-width: 600px) {
    width: 20%;
  }
`
const SearchLogo = styled.img`
  position: relative;
  width: 40px;
  right: 5px;
  @media (max-width: 600px) {
    width: 25px;
  }
`
const Icon = styled.img`
  height: 30px;
  margin: 0 10px;
  cursor: pointer;
`
const GrayIcon= styled(Icon)`
  color: var(--saboten-gray-800);
`
const Text = styled.h2`
  color: var(--saboten-gray-800);
  @media (max-width: 600px) {
    font-size: 19px;
  }
`
const TextPost = styled.h2`
  color: var(--saboten-green-500);
  margin-right: 15px;
  cursor: pointer;
  @media (max-width: 600px) {
    font-size: 19px;
  }
`
