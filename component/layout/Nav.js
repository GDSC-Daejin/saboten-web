import styled from 'styled-components'
import { useRouter } from "next/router";

const StyledNav = styled.div`
  box-shadow:0 2px 5px var(--box-shadow);
  padding-bottom: 10px;
`

const InnerNav = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 2% 5px 2%;
`
const InnerNavUp = styled(InnerNav)`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 2% 5px 2%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.3), inset 0 0 1px rgba(255, 255, 255, 0.3);
`

const TextLogo = styled.img`
  width: 20%;
  margin-left: 20px;
  //margin: auto;
  
`

const SearchLogo = styled.img`
  width: 6%;
`

const Nav = () => {
    const router = useRouter();
    const currPath = router.pathname.slice(1);
    return (
        <>
            {currPath === "" ? (
                        <InnerNavUp>
                            <TextLogo src="/asset/image/text_logo.png" alt="로고"/>
                            <SearchLogo src="/asset/image/search.png" alt="로고"/>
                        </InnerNavUp>
            ) :
                <StyledNav>
                    <InnerNav>
                        <TextLogo src="/asset/image/text_logo.png" alt="로고"/>
                        <SearchLogo src="/asset/image/search.png" alt="로고"/>
                    </InnerNav>
                </StyledNav>
            }
        </>
    );
}
export default Nav
