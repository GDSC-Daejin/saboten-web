import Nav from './Nav';
import Footer from "./Footer";
import styled from "styled-components";

const Body = styled.div`
  //height: 80vh;
  //@media (max-width: 850px) {
  //  height: 65vh;
  //}
  //@media (max-width: 450px) {
  //  height: 75vh;
  //}
  //@media (max-width: 400px) {
  //  height: 83vh;
  //}
`;
export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <Body>
                {children}
                <Footer/>
            </Body>
        </>
    );
}
