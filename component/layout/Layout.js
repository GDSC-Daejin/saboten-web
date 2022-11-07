import Nav from './Nav';
import Footer from "./Footer";


export default function Layout({ children }) {
    return (
        <>
            <Nav />
            <div>{children}</div>
            <Footer/>
        </>
    );
}
