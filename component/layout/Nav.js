import styled from 'styled-components'

const StyledNav = styled.div`
  box-shadow:0 2px 5px lightgrey;
  padding-bottom: 3%;
`

const InnerNav = styled.div`
  display:flex;
  justify-content: space-between;
  align-items: center;
  padding: 3% 2% 0 2%;
`

const TextLogo = styled.img`
  width: 20%;
  margin-left: 9%;
  //margin: auto;
  
`

const SearchLogo = styled.img`
  width: 6%;
`

const Nav = () => {
    return (
        <StyledNav>
            <InnerNav>
                <span></span>
                <TextLogo src="/asset/image/text_logo.png" alt="로고"/>
                <SearchLogo src="/asset/image/search.png" alt="로고"/>
            </InnerNav>
        </StyledNav>
    )
}
export default Nav
