import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
//import Loader from "react-loaders"
import { ParallaxProvider } from "react-scroll-parallax";
import Transition from "../components/Transition";
import Shapes from "../components/Shapes";
import Projects from "../components/Projects";


export default function Home() {
  return (
    <>
    <Transition />
    <div className="main">
      <ParallaxProvider>
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Shapes />
      </ParallaxProvider>
    </div>
    {/*<Loader type="ball-pulse" active/>*/}
    </>
  );
}