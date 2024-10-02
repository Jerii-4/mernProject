import React, { useState } from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/navbar/Hero/Hero";
import Programs from "./components/navbar/Programs/programs";
import Title from "./components/navbar/Title/Title";
import About from "./components/navbar/about/About";
import Campus from "./components/navbar/campus/Campus";
import Testimonials from "./components/navbar/Testimonials/Testimonials";
import Contact from "./components/navbar/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Videoplayer from "./components/Videoplayer/Videoplayer";
const App = () => {
  const [playState, setPlayState] = useState(false);
  return (
    <div>
      <Navbar />
      <Hero />
      <div className="container">
        <Title subTitle="Our Programs" title="What We Offer" />
        <Programs />
        <About setPlayState={setPlayState} />
        <Title subTitle="Gallery" title="Campus Photos" />
        <Campus />
        <Title subTitle="Testimonials" title="What a student will say" />
        <Testimonials />
        <Title subTitle="Contact us" title="Get In Touch" />
        <Contact />
        <Footer />
      </div>
      <Videoplayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
};
export default App;

// Its done!!!!!!!!!!!!!

