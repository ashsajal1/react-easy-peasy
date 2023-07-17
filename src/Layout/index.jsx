import Footer from "../components/Footer";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";

const Layout = ({ children }) => {
    return (<>
        <Navbar />
        <HeroSection />
        {children}
        <Footer />
    </>);
}

export default Layout;