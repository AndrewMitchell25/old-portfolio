import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import Contact from "../components/Contact";
import Loader from "react-loaders"
import { ParallaxProvider } from "react-scroll-parallax";


export default function Home() {
  return (
    <>
    <div className="main">
      <ParallaxProvider>
        <Navbar />
        <Header />
        <About />
        <Contact />
        <div className="test"></div>
      </ParallaxProvider>
    </div>
    <Loader type="ball-pulse"/>
    </>
  );
}