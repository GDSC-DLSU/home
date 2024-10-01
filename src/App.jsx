// import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Gallery from "./components/Gallery";
import RegForm from "./components/RegForm";
import ExecutiveBoard from "./components/ExecutiveBoard";
import Benefits from "./components/Benefits";
import LookingFor from "./components/LookingFor";
import Footer from "./components/Footer";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact/Contact";
import NavigationIcon from '@mui/icons-material/Navigation';
import Fab from '@mui/material/Fab';

const FABTarget = "hero";

const App = () => {
  const scrollToSection = () => {
    const element = document.getElementById(FABTarget);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };


  return (
    <div>
      {/* <Navbar /> */}
      <Hero />
      <div className="container">
        <Programs />
        <About />
        <Title subTitle="Gallery" title="What We Do" />
        <Gallery />
        <ExecutiveBoard />
        <LookingFor />
        <Benefits />
        {/* <Title subTitle="TESTIMONIALS" title="What People Say" />
        <Testimonials /> */}
        {/* <Title subTitle="Contact Us" title="Get in Touch" /> */}
        {/* <Contact /> */}
        {/* <Title subTitle="Register" title="Join Us" /> */}
        {/* <RegForm /> */}
        <Footer />
      </div>

      <Fab 
        variant="extended" 
        sx={{ 
          position: 'fixed', 
          bottom: 16, 
          right: 16 
        }}
        onClick={scrollToSection}
      >
        <NavigationIcon sx={{ mr: 1 }} />
        Scroll To Top
      </Fab>
    </div>
  );
};

export default App;