import React from "react";
// style
import "./App.css";
import About from "./components/About/About";
// components
import Contact from "./components/Contact/Contact";
import Experience from "./components/Experience/Experience";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio";
import Services from "./components/Services/Services";
import Testiminals from "./components/Testiminals/Testiminals";
const App = () => {
  return (
    <>
      <Header />
      <Navbar />
      <About />
      <Experience />
      {/* <Services /> */}
      <Portfolio />
      {/* <Testiminals /> */}
      <Contact />
      <Footer />
    </>
  );
};

export default App;
