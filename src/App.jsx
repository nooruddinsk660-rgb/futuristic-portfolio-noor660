import ParticleBackground from "./component/ParticleBackground";
import Navbar from "./component/Navbar";
import Hero from "./component/Hero";
import About from "./component/About";
import Projects from "./component/Projects";
import Skills from "./component/Skills";
import Contact from "./component/Contact";
import Footer from "./component/Footer";

function App() {
    return (
        <div className="relative bg-dark-900 text-white overflow-x-hidden">
            <ParticleBackground />
            <Navbar />
            <Hero />
            <About />
            <Projects />
            <Skills />
            <Contact />
            <Footer />
        </div>
    );
}
export default App;
