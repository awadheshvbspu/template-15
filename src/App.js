import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Hero from './component/Hero';
import Analytics from './component/Analytics';
import NewsLetters from './component/NewsLetters';
import Cards from './component/Cards';
import Footer from './component/Footer';

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <Analytics/>
      <NewsLetters/>
      <Cards/>
      <Footer/>
    </>
  );
}

export default App;
