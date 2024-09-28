import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Gallery from "./components/Gallery";
import RegForm from "./components/RegForm";
import ExecutiveBoard from "./components/ExecutiveBoard";
// import Testimonials from "./components/Testimonials";
// import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Programs />
        <About />
        <Title subTitle="Gallery" title="What We Do" />
        <Gallery />
        <ExecutiveBoard />
        {/* <Title subTitle="TESTIMONIALS" title="What People Say" />
        <Testimonials /> */}
        {/* <Title subTitle="Contact Us" title="Get in Touch" /> */}
        {/* <Contact /> */}
        {/* <Title subTitle="Register" title="Join Us" /> */}
        <RegForm />
      </div>
    </div>
  );
};

export default App;
