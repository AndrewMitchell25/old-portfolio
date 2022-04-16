import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import About from "../components/About";
import { ParallaxProvider } from "react-scroll-parallax";


export default function Home() {
  return (
    <main className="main">
      <ParallaxProvider>
        <Navbar />
        <Header />
        <About />
        <div className="test"></div>
      </ParallaxProvider>
    </main>
  );
}