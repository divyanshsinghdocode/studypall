import "./App.css";
import Header from "./Components/Header/Header";
import HeroSection from "./Components/HeroSection/HeroSection";
import Features from "./Components/Features/Features";
import Footer from "./Components/Footer/Footer";
import Bot from "./Components/Bot/Bot";
import Forms from "./Components/Forms/Forms";
import Priceing from "./Components/Priceing/Priceing";


import React from 'react';
import Peeer from "./Components/Peer/Peer";


function App() {
  return (

    
    <div className="App">

      <Header />
      <HeroSection />
      <Features />
      <Priceing/>
      <Forms/>
      <Bot/>
      <Peeer/>
      <Footer />
    </div>
  );
}

export default App;
