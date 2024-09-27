import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Programs from "./components/Programs";
import Title from "./components/Title";
import About from "./components/About";
import Gallery from "./components/Gallery";
import RegForm from "./components/RegForm";
// import Testimonials from "./components/Testimonials/Testimonials";
// import Contact from "./components/Contact/Contact";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Program" title="What To Expect" />
        <Programs />
        <About />
        <Title subTitle="Gallery" title="What We Do" />
        <Gallery />
        {/* <Title subTitle="TESTIMONIALS" title="What People Say" />
        <Testimonials /> */}
        {/* <Title subTitle="Contact Us" title="Get in Touch" /> */}
        {/* <Contact /> */}
        <RegForm />
      </div>
    </div>
  );
};

export default App;
