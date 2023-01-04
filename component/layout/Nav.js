import styled from 'styled-components'
import { useRouter } from "next/router";

const StyledNav = styled.div`
  padding-bottom: 10px;
  position: fixed;
  top: 0px;
`
const InnerNav = styled.div`
  position: fixed;
  top: 0;
  display: flex;
  box-shadow:0 2px 5px var(--box-shadow);
  background-color: var(--saboten-white);
  justify-content: space-between;
  align-items: center;
  padding: 10px 2% 5px 0;
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
`

const TextLogo = styled.img`
  position: relative;
  width: 120px;
  margin-left: 20px;
  margin-top: 10px;
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

const Nav = () => {
    const router = useRouter();
    const currPath = router.pathname.slice(1);
    return (
        <>
            {currPath === "" ? (
                <InnerNavUp>
                    <TextLogo src="/asset/image/icons/text_white_logo.svg" alt="로고"/>
                    <SearchLogo src="/asset/image/icons/search_white.svg" alt="로고"/>
                </InnerNavUp>
            ) :
                <StyledNav>
                    <InnerNav>
                        <TextLogo src="/asset/image/icons/text_logo.png" alt="로고"/>
                        <SearchLogo src="/asset/image/icons/search.png" alt="로고"/>
                    </InnerNav>
                </StyledNav>
            }
        </>
    );
}
export default Nav
