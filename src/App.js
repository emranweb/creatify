import Awards from "./components/Awards";
import Blog from "./components/Blog";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Info from "./components/Info";
import Portfolio from "./components/Portfolio";
import Skill from "./components/Skill";
import Testimonial from "./components/Testimonial";

function App() {
    return (
        <div>
            <Header />
            <Hero />
            <Info />
            <Skill />
            <Portfolio />
            <Testimonial />
            <Awards />
            <Blog />
            <Footer />
        </div>
    );
}

export default App;
