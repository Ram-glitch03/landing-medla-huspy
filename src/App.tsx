import Header from "./components/Header";
import Hero from "./components/Hero";
import Slider from "./components/Slider";
import PropertiesGrid from "./components/PropertiesGrid";
import Gallery from "./components/Gallery";
import AboutUs from "./components/AboutUs";
import Projects from "./components/Projects";
import Services from "./components/Services";
import FunFacts from "./components/FunFacts";
import FAQ from "./components/FAQ";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <Hero />
        <Slider />
        <PropertiesGrid />
        <Gallery />
        <AboutUs />
        <Projects />
        <Services />
        <FunFacts />
        <FAQ />
        <Blog />
      </main>
      <Contact />
      <Footer />
    </div>
  );
}
