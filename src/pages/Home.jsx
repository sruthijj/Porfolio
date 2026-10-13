import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Hero from "../sections/Hero";
import SelectedWork from "../sections/SelectedWork";
import About from "../sections/About";
import Skills from "../sections/Skills";
import Experience from "../sections/Experience";
import CreativeLab from "../sections/CreativeLab";
import Contact from "../sections/Contact";

/**
 * Main Home Page
 * Assembles all 7 primary portfolio sections with smooth anchor scrolling support.
 */
export default function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const elem = document.querySelector(location.hash);
      if (elem) {
        setTimeout(() => {
          elem.scrollIntoView({ behavior: "smooth" });
        }, 50);
      }
    }
  }, [location]);

  return (
    <main id="main-content">
      <Hero />
      <SelectedWork />
      <About />
      <Skills />
      <Experience />
      <CreativeLab />
      <Contact />
    </main>
  );
}
