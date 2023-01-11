import Nav from './Nav';
import Footer from "./Footer";
import styled from "styled-components";
import {useRouter} from "next/router";

export default function Layout({ children }) {
    const router = useRouter();
    const currPath = router.pathname.slice(1);
    return (
        <>
            <Nav />
            {currPath === "" ? (
                    <HomeBody home>
                        {children}
                        <Footer/>
                    </HomeBody>
                ) :
                <Body home>
                    {children}
                    <Footer/>
                </Body>
            }
        </>
    );
}

const Body = styled.div`
  padding-top: 60px;
  padding-bottom: 80px;
  height: 100vh;
  background-color: #F5F5F5;
`;
const HomeBody = styled.div`
  padding-top: 0;
  padding-bottom: 80px;
  background-color: #F5F5F5;
`
